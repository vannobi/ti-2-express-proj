import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Curso } from '../entities/Curso';

export class CursoController {
  private cursoRepository = getRepository(Curso);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.cursoRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.cursoRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.cursoRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let cursoToRemove = await this.cursoRepository.findOne(request.params.id);
    return this.cursoRepository.remove(cursoToRemove);
  }
}
