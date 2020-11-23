import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Competencia } from '../entities/Competencia';

export class CompetenciaController {
  private competenciaRepo = getRepository(Competencia);

  async all(request: Request, response: Response, next: NextFunction) {
    console.log(request.params);
    return this.competenciaRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    console.log(request.params);
    return this.competenciaRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    return this.competenciaRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    let userToRemove = await this.competenciaRepo.findOne(request.params.id);
    await this.competenciaRepo.remove(userToRemove);
  }
}
