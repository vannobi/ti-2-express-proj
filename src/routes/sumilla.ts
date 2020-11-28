import { SumillasController } from '../controller/SumillaController';
export const sumillaRoutes = [
  {
    method: 'get',
    route: '/sumillas',
    controller: SumillasController,
    action: 'all',
    response: 'json',
  },
  //   {
  //     method: 'get',
  //     route: '/cursos/:id',
  //     controller: CursoController,
  //     action: 'one',
  //   },
  {
    method: 'post',
    route: '/sumillas/form',
    controller: SumillasController,
    action: 'saveForm',
    response: 'json',
  },
  //   {
  //     method: 'delete',
  //     route: '/cursos/:id',
  //     controller: CursoController,
  //     action: 'remove',
  //   },
];
