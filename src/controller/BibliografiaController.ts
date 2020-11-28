import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Bibliografia } from '../entities/Bibliografia';

export class BibliografiaController {
  private bibRepo = getRepository(Bibliografia);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.bibRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.bibRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.bibRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let bibToRemove = await this.bibRepo.findOne(request.params.id);
    return this.bibRepo.remove(bibToRemove);
  }
}
