import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { ResultadosEstudiante } from '../entities/ResultadosEstudiante';

export class ResultadosEstController {
  private resultadosEstRepo = getRepository(ResultadosEstudiante);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.resultadosEstRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.resultadosEstRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.resultadosEstRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let resultToRemove = await this.resultadosEstRepo.findOne(request.params.id);
    return this.resultadosEstRepo.remove(resultToRemove);
  }
}
