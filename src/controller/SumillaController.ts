import { EntityManager, getManager, getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Sumilla } from '../entities/Sumilla';
import { extractBookFeatures, Bib } from '../util/BibTex';
import { SumillaResultado } from '../entities/SumillaResultado';
import { SumillaCompetencia } from '../entities/SumillaCompetencia';
import { UnidadAcademica } from '../entities/UnidadAcademica';
import { Topico } from '../entities/Topico';
import { Bibliografia } from '../entities/Bibliografia';
import { BibliografiaUnidad } from '../entities/BibliografiaUnidad';
import { Autor } from '../entities/Autor';
import { AutorBibliografia } from '../entities/AutorBibliografia';
import { Curso } from '../entities/Curso';
import { ResultadosEstudiante } from '../entities/ResultadosEstudiante';
import { Competencia } from '../entities/Competencia';

export interface FullSumilla {
  informacionGeneral: {
    semestre: number;
    creditos: number;
    horasDelCurso: {
      teoria: number;
      laboratorio: number;
      practica: number;
    };
    prerequisitos: any[];
  };
  fundamentacion: string;
  nivelesDeResultadoDelEstudiante: any[];
  competenciasDelCurso: any[];
  unidadesAcademicas: any[];
  referencias: any[];
}

export class SumillasController {
  private sumRepo = getRepository(Sumilla);
  async all(request: Request, response: Response, next: NextFunction) {
    return this.sumRepo.find();
  }

  async byCursoId(request: Request, response: Response, next: NextFunction) {
    return this.sumRepo.find({ where: { sumCurso: request.params.id } });
  }

  async fullSumillabyId(request: Request, response: Response, next: NextFunction) {
    let fullSumilla = <FullSumilla>{};
    await getManager()
      .transaction(async transactionalEntityManager => {
        const sumilla = await transactionalEntityManager
          .getRepository(Sumilla)
          .findOne({ where: { sumIde: request.params.id } });
        console.log('____SUMILLA____');
        console.log(sumilla);
        //1. informacion general
        const curso = await transactionalEntityManager
          .getRepository(Curso)
          .findOne({ where: { curIde: sumilla.sumCurso } });
        fullSumilla.informacionGeneral = {
          creditos: curso.curCredi,
          semestre: curso.curSem,
          horasDelCurso: {
            laboratorio: curso.curHorLab,
            practica: curso.curHorPra,
            teoria: curso.curHorTeo,
          },
          prerequisitos: null,
        };

        //2. fundamentacion
        fullSumilla.fundamentacion = sumilla.sumFund;

        //3. Niveles de resultados del estudiante
        fullSumilla.nivelesDeResultadoDelEstudiante = [];
        for (let sumillaResultados of await transactionalEntityManager
          .getRepository(SumillaResultado)
          .find({ where: { sumIde: request.params.id } })) {
          fullSumilla.nivelesDeResultadoDelEstudiante.push({
            resultado: await transactionalEntityManager
              .getRepository(ResultadosEstudiante)
              .findOne({ where: { resEstIde: sumillaResultados.resEstIde } }),
            nivel: sumillaResultados.sumResNivel,
          });
        }

        //4. Competencias
        fullSumilla.competenciasDelCurso = [];
        for (let sumillaCompetencias of await transactionalEntityManager
          .getRepository(SumillaCompetencia)
          .find({ where: { sumIde: request.params.id } })) {
          fullSumilla.competenciasDelCurso.push({
            competencia: await transactionalEntityManager
              .getRepository(Competencia)
              .findOne({ where: { comIde: sumillaCompetencias.comIde } }),
          });
        }
        //5. Unidades Academicas
        fullSumilla.unidadesAcademicas = [];
        for (let unidadesAcademicas of await transactionalEntityManager
          .getRepository(UnidadAcademica)
          .find({ where: { sumIde: request.params.id } })) {
          const _t = await transactionalEntityManager
            .getRepository(BibliografiaUnidad)
            .find({
              where: {
                uniAcaIde: unidadesAcademicas.uniAcaIde,
              },
            });
          fullSumilla.unidadesAcademicas.push({
            Competencias: unidadesAcademicas.comIde,
            Topicos: await transactionalEntityManager
              .getRepository(Topico)
              .find({ where: { uniAcaIde: unidadesAcademicas.uniAcaIde } }),
            Bibliografia: await Promise.all(
              _t.map(
                async _bu =>
                  await transactionalEntityManager.getRepository(Bibliografia).findOne({
                    where: {
                      bibIde: _bu.bibIde,
                    },
                  })
              )
            ),
          });
        }

        // 6. Bibiografia
        // fullSumilla.referencias = [];
        // fullSumilla.referencias.add(
        //   await getRepository(UnidadAcademica).find({
        //     where: {
        //       sumIde: request.params.id,
        //     },
        //   })
        // );
      })
      .catch(error => console.log(error));
    console.log(fullSumilla);
    return fullSumilla;
  }
  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.cursoRepository.findOne(request.params.id);
  // }

  async saveForm(request: Request, response: Response, next: NextFunction) {
    // const conn = getConnection();
    const {
      curIde,
      sumFund,
      sumResultados,
      sumCompetencias,
      sumContenidos,
      sumVersion,
    } = request.body;
    const returnedObj = [];
    await getManager()
      .transaction(async transactionalEntityManager => {
        // ACTION 1
        // insert new sumilla
        let insertedSumilla = await transactionalEntityManager
          .getRepository(Sumilla)
          .save({
            sumCurso: curIde,
            sumFund: sumFund,
            sumVersion: sumVersion,
          });
        returnedObj.push(insertedSumilla);
        // ACTION 2
        // insert new Sumilla_resultado
        for (let sumi of sumResultados) {
          let _Res = await transactionalEntityManager
            .getRepository(SumillaResultado)
            .save({
              sumIde: insertedSumilla.sumIde,
              resEstIde: sumi.resEstIde,
              sumResNivel: sumi.sumResNivel,
            });
          returnedObj.push(_Res);
        }
        // ACTION 3
        // insert new Sumilla_competencia
        for (let comp of sumCompetencias) {
          let _Comp = await transactionalEntityManager
            .getRepository(SumillaCompetencia)
            .save({ comIde: comp, sumIde: insertedSumilla.sumIde });
          returnedObj.push(_Comp);
        }
        // ACTION 4
        // insert unidad academica
        // insert Topico
        // insert Autor Bibliografia AutorBibliografia (if needed)
        // insert BibliografiaUnidad
        for (let content of sumContenidos) {
          const { unidadAcademica, topicos, bibliografiaUnidad } = content;
          const { uniAcaNom, uniAcaHoras, comIde } = unidadAcademica;
          // falta horas
          const insertedUnidadAcademica = await transactionalEntityManager
            .getRepository(UnidadAcademica)
            .save({
              uniAcaNom: uniAcaNom,
              sumIde: insertedSumilla.sumIde,
              comIde: comIde,
              uniAcaHoras: uniAcaHoras,
            });
          returnedObj.push(insertedUnidadAcademica);

          for (let topico of topicos) {
            let _itop = await transactionalEntityManager.getRepository(Topico).save({
              uniAcaIde: insertedUnidadAcademica.uniAcaIde,
              topDes: topico.topDes,
            });
            returnedObj.push(_itop);
          }

          const { bibliografia } = bibliografiaUnidad;
          for (let bib of bibliografia) {
            let bibIde = null;
            if (bib.new) {
              // parse bibtex
              const Book = extractBookFeatures(bib.bibtex);
              // insert autor, bibliografia and autorBibliografia
              bibIde = await insertAutorBibliografia(
                transactionalEntityManager,
                Book,
                returnedObj
              );
            } else if (!bib.new && bib.bibIde) {
              // insert with bib.bibIde
              bibIde = bib.bibIde;
            }
            let _iBibUni = await transactionalEntityManager
              .getRepository(BibliografiaUnidad)
              .save({ bibIde: bibIde, uniAcaIde: insertedUnidadAcademica.uniAcaIde });
            returnedObj.push(_iBibUni);
          }
        }
      })
      .catch(error => returnedObj.push(error));
    return returnedObj;
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.cursoRepository.findOne(request.params.id);
  //   await this.cursoRepository.remove(userToRemove);
  // }
}

const insertAutorBibliografia = async (
  entityManager: EntityManager,
  bib: Bib,
  returnedObj
) => {
  let bibIde = null;
  // insert Bibliografia
  const bookFound = await entityManager.getRepository(Bibliografia).findOne({
    where: {
      bibNom: bib.title,
      bibAnio: bib.year,
      bibEdito: bib.publisher,
      bibEdici: bib.edition,
    },
  });
  if (!bookFound) {
    const insertedBib = await entityManager.getRepository(Bibliografia).save({
      bibNom: bib.title,
      bibAnio: bib.year,
      bibEdito: bib.publisher,
      bibEdici: bib.edition,
    });
    bibIde = insertedBib.bibIde;
    returnedObj.push(insertedBib);
  } else {
    bibIde = bookFound.bibIde;
    returnedObj.push(bookFound);
  }
  // insert autor & autor bibliografia
  for (let author of bib.author) {
    let autIde = null;
    const autorFound = await entityManager.getRepository(Autor).findOne({
      where: {
        autApe: author.family,
        autNom: author.given,
      },
    });
    if (!autorFound) {
      console.log('not found:', autorFound);
      console.log(author.given, author.family);
      const insertedAutor = await entityManager
        .getRepository(Autor)
        .save({ autNom: author.given, autApe: author.family });
      returnedObj.push(insertedAutor);
      autIde = insertedAutor.autIde;
    } else {
      console.log('found:', autorFound);
      autIde = autorFound.autIde;
      returnedObj.push(autorFound);
    }
    // insert into autor_bibliografia
    const _iabib = await entityManager
      .getRepository(AutorBibliografia)
      .save({ autIde: autIde, bibIde: bibIde });
    returnedObj.push(_iabib);
  }
  return bibIde;
};
