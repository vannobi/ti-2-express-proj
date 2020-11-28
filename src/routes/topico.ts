import { TopicosController } from '../controller/TopicosController';
export const topicoRoutes = [
  {
    method: 'get',
    route: '/topicos',
    controller: TopicosController,
    action: 'all',
    response: 'json',
  },
  {
    method: 'get',
    route: '/topicos/:id',
    controller: TopicosController,
    action: 'one',
    response: 'json',
  },
  {
    method: 'post',
    route: '/topicos',
    controller: TopicosController,
    action: 'save',
    response: 'json',
  },
  {
    method: 'delete',
    route: '/topicos/:id',
    controller: TopicosController,
    action: 'remove',
    response: 'json',
  },
];
