import { ResultadosEstController } from '../controller/ResultadosEstController';
export const resultEstRoutes = [
  {
    method: 'get',
    route: '/resultado',
    controller: ResultadosEstController,
    action: 'all',
    response: 'json',
  },
  {
    method: 'get',
    route: '/resultado/:id',
    controller: ResultadosEstController,
    action: 'one',
    response: 'json',
  },
  {
    method: 'post',
    route: '/resultado',
    controller: ResultadosEstController,
    action: 'save',
    response: 'json',
  },
  {
    method: 'delete',
    route: '/resultado/:id',
    controller: ResultadosEstController,
    action: 'remove',
    response: 'json',
  },
];
