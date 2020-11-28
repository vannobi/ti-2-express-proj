import { CompetenciaController } from '../controller/CompetenciaController';
export const competenciaRoutes = [
  {
    method: 'get',
    route: '/competencias',
    controller: CompetenciaController,
    action: 'all',
    response: 'json',
  },
  {
    method: 'get',
    route: '/competencias/:id',
    controller: CompetenciaController,
    action: 'one',
    response: 'json',
  },
  {
    method: 'post',
    route: '/competencias',
    controller: CompetenciaController,
    action: 'save',
    response: 'json',
  },
  {
    method: 'delete',
    route: '/competencias/:id',
    controller: CompetenciaController,
    action: 'remove',
    response: 'json',
  },
];
