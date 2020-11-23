import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { ResultadosEstudiante } from '../entities/ResultadosEstudiante';

export class ResultadosEstController {
  private resultadosEstRepo = getRepository(ResultadosEstudiante);

  async all(request: Request, response: Response, next: NextFunction) {
    console.log(request.params);
    return this.resultadosEstRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    console.log(request.params);
    return this.resultadosEstRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    return this.resultadosEstRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    let userToRemove = await this.resultadosEstRepo.findOne(request.params.id);
    await this.resultadosEstRepo.remove(userToRemove);
  }
}
