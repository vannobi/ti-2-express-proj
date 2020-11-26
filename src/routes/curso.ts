import { CursoController } from '../controller/CursoController';
export const cursoRoutes = [
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
];
