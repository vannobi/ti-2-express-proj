import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
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
  app.use(cors());
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

  Routes.forEach(_route => {
    let controller = new _route.controller() as any;
    const { method, route, action, response } = _route;
    app[method](route, async (req: Request, res: Response, next: NextFunction) => {
      const result = await controller[action](req, res, next).catch(error => {
        res.json(error);
      });
      res[response](result);
    });
  });
  app.listen(PORT);
  console.log(`listening on ${PORT}`);
};

main().catch(error => {
  console.log(error);
});
