import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Topico } from '../entities/Topico';

export class TopicosController {
  private topicoRepo = getRepository(Topico);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.topicoRepo.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.topicoRepo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.topicoRepo.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let topicoToRemove = await this.topicoRepo.findOne(request.params.id);
    return this.topicoRepo.remove(topicoToRemove);
  }
}
