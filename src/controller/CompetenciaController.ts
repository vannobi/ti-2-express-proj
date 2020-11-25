import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Competencia } from '../entities/Competencia';

export class CompetenciaController {
  private competenciaRepo = getRepository(Competencia);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.competenciaRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.competenciaRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.competenciaRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let compToRemove = await this.competenciaRepo.findOne(request.params.id);
    return this.competenciaRepo.remove(compToRemove);
  }
}
