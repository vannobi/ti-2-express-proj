import { SumillasController } from './controller/SumillasController';
import { CursosController } from './controller/CursosController';

export const Routes = [
  {
    method: 'get',
    route: '/cursos',
    controller: CursosController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/cursos/:id',
    controller: CursosController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/cursos',
    controller: CursosController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/cursos/:id',
    controller: CursosController,
    action: 'remove',
  },
  {
    method: 'get',
    route: '/sumillas',
    controller: SumillasController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/sumillas/:id',
    controller: SumillasController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/sumillas',
    controller: SumillasController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/sumillas/:id',
    controller: SumillasController,
    action: 'remove',
  },
];
