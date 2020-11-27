import { getConnection, getManager, getRepository, QueryRunner } from 'typeorm';
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

export class SumillasController {
  private sumRepo = getRepository(Sumilla);
  async all(request: Request, response: Response, next: NextFunction) {
    return this.sumRepo.find();
  }
  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.cursoRepository.findOne(request.params.id);
  // }

  async saveForm(request: Request, response: Response, next: NextFunction) {
    const conn = getConnection();
    const {
      curIde,
      sumFund,
      sumResultados,
      sumCompetencias,
      sumContenidos,
      sumVersion,
    } = request.body;
    let logs = [];

    const queryRunner = conn.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      // ACTION 1
      // insert new sumilla
      const insertedSumilla = await queryRunner.manager.getRepository(Sumilla).save({
        sumCurso: curIde,
        sumFund: sumFund,
        sumVersion: sumVersion,
      });
      // ACTION 2
      // insert new Sumilla_resultado
      for (let sumi of sumResultados) {
        await queryRunner.manager.getRepository(SumillaResultado).save({
          sumIde: insertedSumilla.sumIde,
          resEstIde: sumi.resEstIde,
          sumResNivel: sumi.sumResNivel,
        });
      }
      // ACTION 3
      // insert new Sumilla_competencia
      for (let comp of sumCompetencias) {
        await queryRunner.manager
          .getRepository(SumillaCompetencia)
          .save({ comIde: comp });
      }
      // ACTION 4
      // insert unidad academica
      // insert Topico
      // insert Autor Bibliografia AutorBibliografia (if needed)
      // insert BibliografiaUnidad
      for (let content of sumContenidos) {
        const { unidadAcademica, topico, bibliografiaUnidad } = content;
        const { uniAcaNom, uniAcaHoras, comIde } = unidadAcademica;
        // falta horas
        const insertedUnidadAcademica = await queryRunner.manager
          .getRepository(UnidadAcademica)
          .save({
            uniAcaNom: uniAcaNom,
            sumIde: insertedSumilla.sumIde,
            comIde: comIde,
            uniAcaHoras: uniAcaHoras,
          });
        await queryRunner.manager
          .getRepository(Topico)
          .save({ uniAcaIde: insertedUnidadAcademica.uniAcaIde, topDes: topico.topDes });

        const { bibliografia } = bibliografiaUnidad;
        for (let bib of bibliografia) {
          let bibIde = null;
          if (bib.new) {
            // parse bibtex
            const Book = extractBookFeatures(bib.bibtex);
            // insert autor, bibliografia and autorBibliografia
            bibIde = await insertAutorBibliografia(queryRunner, Book, logs);
          } else if (!bib.new && bib.bibIde) {
            // insert with bib.bibIde
            bibIde = bib.bibIde;
          }
          await queryRunner.manager
            .getRepository(BibliografiaUnidad)
            .save({ bibIde: bibIde, uniAcaIde: insertedUnidadAcademica.uniAcaIde });
        }
      }
      logs.push('Data Correctly inserted');
    } catch (error) {
      console.log(error);
      logs.push({ error });
    } finally {
      await queryRunner.release();
    }
    return logs;
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.cursoRepository.findOne(request.params.id);
  //   await this.cursoRepository.remove(userToRemove);
  // }
}

const insertAutorBibliografia = async (queryRunner: QueryRunner, bib: Bib, logs) => {
  let bibIde = null;
  // insert Bibliografia
  const bookFound = await queryRunner.manager.getRepository(Bibliografia).findOne({
    where: {
      bibNom: bib.title,
      bibAnio: bib.year,
      bibEdito: bib.publisher,
      bibEdici: bib.edition,
    },
  });
  if (!bookFound) {
    const insertedBib = await queryRunner.manager.getRepository(Bibliografia).save({
      bibNom: bib.title,
      bibAnio: bib.year,
      bibEdito: bib.publisher,
      bibEdici: bib.edition,
    });
    bibIde = insertedBib.bibIde;
  } else {
    bibIde = bookFound.bibIde;
  }
  // insert autor & autor bibliografia
  for (let author of bib.author) {
    let autIde = null;
    const autorFound = await queryRunner.manager
      .getRepository(Autor)
      .findOne({
        where: {
          autApe: author.family,
          autNom: author.given,
        },
      })
      .catch(error => {
        logs.push(error);
      });
    if (!autorFound) {
      console.log('not found:', autorFound);
      console.log(author.given, author.family);
      const insertedAutor = await queryRunner.manager
        .getRepository(Autor)
        .save({ autNom: author.given, autApe: author.family });
      console.log(insertedAutor);
      autIde = insertedAutor.autIde;
    } else {
      console.log('found:', autorFound);
      autIde = autorFound.autIde;
    }
    // insert into autor_bibliografia
    await queryRunner.manager
      .getRepository(AutorBibliografia)
      .save({ autIde: autIde, bibIde: bibIde });
  }
  return bibIde;
};
