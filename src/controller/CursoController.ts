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
    let returnedObject = { curso: null, prerequisitos: [] };
    await getManager().transaction(async transactionalEntityManager => {
      const {
        curCredi,
        curSem,
        curHorTeo,
        curHorPra,
        curHorLab,
        curNom,
        curCod,
        prerequisitos,
      } = request.body;
      const insertedCurso = await this.cursoRepository.save({
        curCredi: curCredi,
        curSem: curSem,
        curHorTeo: curHorTeo,
        curHorPra: curHorPra,
        curHorLab: curHorLab,
        curNom: curNom,
        curCod: curCod,
      });
      returnedObject.curso = insertedCurso;
      if (prerequisitos.length > 0) {
        for (let i = 0; i < prerequisitos.length; i++) {
          const insertedPrereq = await this.prerequisitosRepository.save({
            curIde: insertedCurso.curIde,
            curIdePre: prerequisitos[i],
          });
          returnedObject.prerequisitos.push(insertedPrereq);
        }
      }
    });
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
