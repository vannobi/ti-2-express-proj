import { SumillasFormController } from '../controller/SumillasFormController';
export const sumillasFormRoutes = [
  //   {
  //     method: 'get',
  //     route: '/cursos',
  //     controller: CursoController,
  //     action: 'all',
  //   },
  //   {
  //     method: 'get',
  //     route: '/cursos/:id',
  //     controller: CursoController,
  //     action: 'one',
  //   },
  {
    method: 'post',
    route: '/sumillas-form',
    controller: SumillasFormController,
    action: 'save',
  },
  //   {
  //     method: 'delete',
  //     route: '/cursos/:id',
  //     controller: CursoController,
  //     action: 'remove',
  //   },
];
