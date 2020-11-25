import { getConnection, getManager, getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Sumilla } from '../entities/Sumilla';
import { Curso } from '../entities/Curso';
import { extractBookFeatures } from '../util/BibTex';

export class SumillasFormController {
  // private cursoRepository = getRepository(Sumilla);

  // async all(request: Request, response: Response, next: NextFunction) {
  //   return this.cursoRepository.find();
  // }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.cursoRepository.findOne(request.params.id);
  // }

  async save(request: Request, response: Response, next: NextFunction) {
    const conn = getConnection();
    const {
      curIde,
      sumFund,
      sumResultados,
      sumCompetencias,
      sumContenidos,
    } = request.body;
    let logs = [];
    // insert
    //  transaction
    const queryRunner = conn.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      // ACTION 1
      // insert new sumilla
      // await queryRunner.manager.save()
      // insert Sumilla_resultado
      // get id ^^
      // ACTION 2
      // insert new Sumilla_resultado
      // ACTION 3
      // insert new Sumilla_competencia
      // ACTION 4
      for (let content of sumContenidos) {
        const { unidadAcademica, topico, bibliografiaUnidad } = content;
        const { sumIde, uniAcaNom, horas, comIde } = unidadAcademica;
        // insert ^^ this data on Unidad_academica
        let _newUniAcaId;
        const { bibliografia } = bibliografiaUnidad;
        for (let bib of bibliografia) {
          if (bib.new) {
            // parse bibtex
            console.log('BIBTEX__________________');
            const Book = extractBookFeatures(`${bib.bibtex}`);
            console.log(Book);
          } else if (!bib.new && bib.bibIde) {
            // insert with bib.bibIde
            console.log({ id: bib.bibIde });
          }
        }
        // console.log(sumIde);
      }
      //   # insert Unidad_academica,
      //   topico,
      //   (Bibliografia, Autor, AutorBibliografia) => Bibliografia_unidad
      //   Competencia
      // # values we have:
      //   newSumillaId
      //   for: unidadAcademica
      //   uniAcaNom
      //   horas
      //   comIde
      //   for: topico
      //   _newUniAcaID
      //   topDes
      //   for: bibliografiaUnidad
      //   _newUniAcaId
      //     for bib in bibliografia
      //     check if is new:
      //       bibIde = null
      //       bibtex
      //       # insert on Bibliografia, Autor, AutorBibliografia
      //     check if not new:
      //       bibIde = INT
      //       bibtex = null
      //       # we only need the id
    } catch (error) {
      console.log(error);
      logs.push({ error });
    } finally {
      await queryRunner.release();
      logs.push('Done');
      // return new Pro;
    }

    // console.log(curIde);
    // console.log(sumFund);
    // console.log(sumResultados);
    // console.log(sumCompetencias);
    // console.log(sumContenidos);

    // let cursoRepo = conn.getRepository(Curso);
    // let sumRepo = conn.getRepository(Sumilla);

    // cursoRepo.createQueryBuilder('C');
    // // getConnection().
    // console.log('_____________________________HEAD_____');
    // // await getManager().transaction(async);
    // console.log(
    //   (
    //     await sumRepo
    //       .createQueryBuilder()
    //       // .useTransaction(true)
    //       .insert()
    //       .into(Sumilla)
    //       .values([{ sumCurso: curIde, sumFund: sumFund }])
    //       .execute()
    //   ).identifiers[0]
    // );

    // try {
    //   queryRunner.query()
    // } catch (err) {
    // } finally {
    // }
    // await queryRunner.connection.createQueryBuilder()

    return new Promise((res, rej) => {
      res(logs);
    });
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.cursoRepository.findOne(request.params.id);
  //   await this.cursoRepository.remove(userToRemove);
  // }
}
