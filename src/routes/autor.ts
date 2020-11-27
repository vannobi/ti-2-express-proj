import { AutorController } from '../controller/AutorController';
export const autorRoutes = [
  {
    method: 'get',
    route: '/autores',
    controller: AutorController,
    action: 'all',
    response: 'json',
  },
  {
    method: 'get',
    route: '/autores/:id',
    controller: AutorController,
    action: 'one',
    response: 'json',
  },
  {
    method: 'post',
    route: '/autores',
    controller: AutorController,
    action: 'save',
    response: 'json',
  },
  {
    method: 'delete',
    route: '/autores/:id',
    controller: AutorController,
    action: 'remove',
    response: 'json',
  },
];
