import { CursoController } from '../controller/CursoController';
export const cursoRoutes = [
  {
    method: 'get',
    route: '/cursos',
    controller: CursoController,
    action: 'all',
    response: 'json',
  },
  {
    method: 'get',
    route: '/cursos/year/:year',
    controller: CursoController,
    action: 'byYear',
    response: 'json',
  },
  {
    method: 'get',
    route: '/cursos/semestre/:semester',
    controller: CursoController,
    action: 'bySemester',
    response: 'json',
  },
  {
    method: 'get',
    route: '/cursos/:id/prerequisito',
    controller: CursoController,
    action: 'allPrerequisitos',
    response: 'json',
  },
  {
    method: 'get',
    route: '/cursos/:id',
    controller: CursoController,
    action: 'one',
    response: 'json',
  },
  {
    method: 'post',
    route: '/cursos',
    controller: CursoController,
    action: 'save',
    response: 'json',
  },
  {
    method: 'delete',
    route: '/cursos/:id',
    controller: CursoController,
    action: 'remove',
    response: 'json',
  },
];
