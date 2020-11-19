import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
// import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';
// import { Sumilla } from './entity/Sumilla';
import { Curso } from './entities/Curso';

const PORT = 3000;

const main = async () => {
  const connection = await createConnection();
  const app = express();
  app.use(express.json());
  Routes.forEach(route => {
    (app as any)[route.method](
      route.route,
      (req: Request, res: Response, next: Function) => {
        const result = new (route.controller as any)()[route.action](req, res, next);
        if (result instanceof Promise) {
          result.then(result =>
            result !== null && result !== undefined ? res.send(result) : undefined
          );
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      }
    );
  });
  // setup express app here
  // ...

  // start express server
  app.listen(PORT);

  // const curso = new Curso();
  // curso.curCredi = 6;
  // curso.curSem = 2;
  // curso.curHorTeo = 2;
  // curso.curHorLab = 2;
  // curso.curHorPra = 3;
  // curso.curNom = 'QQ';
  // curso.curCod = 'dcaozxd';
  // curso.cur_hor_lab = 2;
  // curso.cur_hor_pra = 2;
  // curso.cur_hor_teo = 2;
  // curso.cur_nom = 'Astronomy';
  // curso.cur_cod = '1C812C3';
  // await connection.manager.save(curso);

  // const sumilla = new Sumilla();
  // sumilla.sum_curso = curso;
  // sumilla.sum_fund = '7777777777777777';
  // await connection.manager.save(sumilla);

  console.log(
    `Express server has started on port 3000. Open http://localhost:${PORT}/cursos to see results`
  );
};

main();
