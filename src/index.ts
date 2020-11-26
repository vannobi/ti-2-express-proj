import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Autor } from './entities/Autor';
import { AutorBibliografia } from './entities/AutorBibliografia';
import { Bibliografia } from './entities/Bibliografia';
import { BibliografiaUnidad } from './entities/BibliografiaUnidad';
import { Competencia } from './entities/Competencia';
import { Curso } from './entities/Curso';
import { Prerequisito } from './entities/Prerequisito';
import { ResultadosEstudiante } from './entities/ResultadosEstudiante';
import { Sumilla } from './entities/Sumilla';
import { SumillaCompetencia } from './entities/SumillaCompetencia';
import { SumillaResultado } from './entities/SumillaResultado';
import { Topico } from './entities/Topico';
import { UnidadAcademica } from './entities/UnidadAcademica';
import { Routes } from './routes';
const PORT = 3000;

const main = async () => {
  const app = express() as any;
  app.use(express.json());
  const conn = await createConnection({
    type: 'mysql',
    host: 'localhost',
    logging: true,
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test',
    synchronize: true,
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [
      Autor,
      AutorBibliografia,
      Bibliografia,
      BibliografiaUnidad,
      Competencia,
      Curso,
      Prerequisito,
      ResultadosEstudiante,
      Sumilla,
      SumillaCompetencia,
      SumillaResultado,
      ResultadosEstudiante,
      Topico,
      UnidadAcademica,
    ],
  });

  Routes.forEach(route => {
    let controller = new route.controller() as any;
    if (route.action === 'one') {
      app.get(route.route, async (req: Request, res: Response, next: NextFunction) => {
        const result = await controller.one(req, res, next).catch(error => {
          res.json(error);
        });
        res.json(result);
      });
    } else if (route.action === 'all') {
      app.get(route.route, async (req: Request, res: Response, next: NextFunction) => {
        const result = await controller.all(req, res, next).catch(error => {
          res.json(error);
        });
        res.json(result);
      });
    } else if (route.action === 'save') {
      app.post(route.route, async (req: Request, res: Response, next: NextFunction) => {
        const result = await controller.save(req, res, next).catch(error => {
          res.json(error);
        });
        res.json(result);
      });
    } else if (route.action === 'remove') {
      app.delete(route.route, async (req: Request, res: Response, next: NextFunction) => {
        const result = await controller.remove(req, res, next).catch(error => {
          res.json(error);
        });
        res.json(result);
      });
    }
  });
  app.listen(PORT);
  console.log(`listening on ${PORT}`);
};

main().catch(error => {
  console.log(error);
});
