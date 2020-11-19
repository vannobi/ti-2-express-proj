// import { SumillasController } from './controller/SumillasController';
import { CursoController } from './controller/CursoController';

export const Routes = [
  {
    method: 'get',
    route: '/cursos',
    controller: CursoController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/cursos/:id',
    controller: CursoController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/cursos',
    controller: CursoController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/cursos/:id',
    controller: CursoController,
    action: 'remove',
  },
  // {
  //   method: 'get',
  //   route: '/sumillas',
  //   controller: SumillasController,
  //   action: 'all',
  // },
  // {
  //   method: 'get',
  //   route: '/sumillas/:id',
  //   controller: SumillasController,
  //   action: 'one',
  // },
  // {
  //   method: 'post',
  //   route: '/sumillas',
  //   controller: SumillasController,
  //   action: 'save',
  // },
  // {
  //   method: 'delete',
  //   route: '/sumillas/:id',
  //   controller: SumillasController,
  //   action: 'remove',
  // },
];
