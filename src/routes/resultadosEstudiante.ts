import { ResultadosEstController } from '../controller/ResultadosEstController';
export const resultEstRoutes = [
  {
    method: 'get',
    route: '/resultado_est',
    controller: ResultadosEstController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/resultado_est/:id',
    controller: ResultadosEstController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/resultado_est',
    controller: ResultadosEstController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/resultado_est/:id',
    controller: ResultadosEstController,
    action: 'remove',
  },
];
