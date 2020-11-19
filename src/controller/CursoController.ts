import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Curso } from '../entities/Curso';

export class CursoController {
  private cursoRepository = getRepository(Curso);

  async all(request: Request, response: Response, next: NextFunction) {
    console.log(request.params);
    return this.cursoRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    console.log(request.params);
    return this.cursoRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    return this.cursoRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    let userToRemove = await this.cursoRepository.findOne(request.params.id);
    await this.cursoRepository.remove(userToRemove);
  }
}
