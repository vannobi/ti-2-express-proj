import { CompetenciaController } from '../controller/CompetenciaController';
export const competenciaRoutes = [
  {
    method: 'get',
    route: '/competencias',
    controller: CompetenciaController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/competencias/:id',
    controller: CompetenciaController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/competencias',
    controller: CompetenciaController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/competencias/:id',
    controller: CompetenciaController,
    action: 'remove',
  },
];
