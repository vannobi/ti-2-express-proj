import { BibliografiaController } from '../controller/BibliografiaController';
export const bibliografiaRoutes = [
  {
    method: 'get',
    route: '/bibliografias',
    controller: BibliografiaController,
    action: 'all',
    response: 'json',
  },
  {
    method: 'get',
    route: '/bibliografias/:id',
    controller: BibliografiaController,
    action: 'one',
    response: 'json',
  },
  {
    method: 'post',
    route: '/bibliografias',
    controller: BibliografiaController,
    action: 'save',
    response: 'json',
  },
  {
    method: 'delete',
    route: '/bibliografias/:id',
    controller: BibliografiaController,
    action: 'remove',
    response: 'json',
  },
];
