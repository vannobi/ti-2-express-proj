import { competenciaRoutes } from './competencia';
import { cursoRoutes } from './curso';
import { resultEstRoutes } from './resultadosEstudiante';
import { sumillaRoutes } from './sumilla';
import { autorRoutes } from './autor';
import { bibliografiaRoutes } from './bibliografia';
import { topicoRoutes } from './topico';


export const Routes = [
  ...competenciaRoutes,
  ...cursoRoutes,
  ...resultEstRoutes,
  ...sumillaRoutes,
  ...autorRoutes,
  ...bibliografiaRoutes,
  ...topicoRoutes
];
