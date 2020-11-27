import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Autor } from '../entities/Autor';

export class AutorController {
  private autorRepo = getRepository(Autor);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.autorRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.autorRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.autorRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let autorToRemove = await this.autorRepo.findOne(request.params.id);
    return this.autorRepo.remove(autorToRemove);
  }
}
