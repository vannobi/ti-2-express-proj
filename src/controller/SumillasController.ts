import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Sumilla } from '../entity/Sumilla';

export class SumillasController {
  private sumillaRepository = getRepository(Sumilla);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.sumillaRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.sumillaRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.sumillaRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.sumillaRepository.findOne(request.params.id);
    await this.sumillaRepository.remove(userToRemove);
  }
}
