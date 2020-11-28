import { getRepository, getManager } from 'typeorm';
import { NextFunction, request, Request, Response } from 'express';
import { Curso } from '../entities/Curso';
import { Prerequisito } from '../entities/Prerequisito';

export class CursoController {
  private cursoRepository = getRepository(Curso);
  private prerequisitosRepository = getRepository(Prerequisito);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.cursoRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.cursoRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    let returnedObject = [];
    if (request.body instanceof Array) {
      await getManager()
        .transaction(async transactionalEntityManager => {
          for (let cur of request.body) {
            const { prerequisitos } = cur;
            const insertedCurso = await transactionalEntityManager
              .getRepository(Curso)
              .save({
                curCredi: cur.curCredi,
                curSem: cur.curSem,
                curHorTeo: cur.curHorTeo,
                curHorPra: cur.curHorPra,
                curHorLab: cur.curHorLab,
                curNom: cur.curNom,
                curCod: cur.curCod,
              });
            returnedObject.push(insertedCurso);
            if (prerequisitos.length > 0) {
              for (let i = 0; i < prerequisitos.length; i++) {
                const insertedPrereq = await transactionalEntityManager
                  .getRepository(Prerequisito)
                  .save({
                    curIde: insertedCurso.curIde,
                    curIdePre: prerequisitos[i],
                  });
                returnedObject.push(insertedPrereq);
              }
            }
          }
        })
        .catch(error => returnedObject.push(error));
      return returnedObject;
    }
    await getManager()
      .transaction(async transactionalEntityManager => {
        const { prerequisitos } = request.body;

        const insertedCurso = await transactionalEntityManager.getRepository(Curso).save({
          curCredi: request.body.curCredi,
          curSem: request.body.curSem,
          curHorTeo: request.body.curHorTeo,
          curHorPra: request.body.curHorPra,
          curHorLab: request.body.curHorLab,
          curNom: request.body.curNom,
          curCod: request.body.curCod,
        });
        returnedObject.push(insertedCurso);
        if (prerequisitos.length > 0) {
          for (let i = 0; i < prerequisitos.length; i++) {
            const insertedPrereq = await transactionalEntityManager
              .getRepository(Prerequisito)
              .save({
                curIde: insertedCurso.curIde,
                curIdePre: prerequisitos[i],
              });
            returnedObject.push(insertedPrereq);
          }
        }
      })
      .catch(error => returnedObject.push(error));
    return returnedObject;
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let cursoToRemove = await this.cursoRepository.findOne(request.params.id);
    return this.cursoRepository.remove(cursoToRemove);
  }

  async allPrerequisitos(request: Request, response: Response, next: NextFunction) {
    return await this.prerequisitosRepository.find({
      where: { curIde: request.params.id },
    });
  }
}
