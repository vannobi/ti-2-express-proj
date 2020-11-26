import { getRepository, getManager } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
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
      const newCurso = new Curso();
      newCurso.curCredi = curCredi;
      newCurso.curSem = curSem;
      newCurso.curHorTeo = curHorTeo;
      newCurso.curHorPra = curHorPra;
      newCurso.curHorLab = curHorLab;
      newCurso.curNom = curNom;
      newCurso.curCod = curCod;
      const insertedCurso = await transactionalEntityManager.save(newCurso);
      returnedObject.curso = insertedCurso;
      if (prerequisitos.length > 0) {
        for (let i = 0; i < prerequisitos.length; i++) {
          const newPrereq = new Prerequisito();
          newPrereq.curIde = insertedCurso.curIde;
          newPrereq.curIdePre = prerequisitos[i];
          const insertedPrereq = await transactionalEntityManager.save(newPrereq);
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
}
