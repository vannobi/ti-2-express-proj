import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
// import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';
import { Sumilla } from './entity/Sumilla';
import { Curso } from './entity/Curso';

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(express.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
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
    app.listen(3000);

    // const curso = new Curso();
    // curso.cur_credi = 6;
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
      'Express server has started on port 3000. Open http://localhost:3000/cursos to see results'
    );
  })
  .catch((error) => console.log(error));
