import { competenciaRoutes } from './competencia';
import { cursoRoutes } from './curso';
import { resultEstRoutes } from './resultadosEstudiante';
import { sumillasFormRoutes } from './sumillasForm';

export default [
  ...competenciaRoutes,
  ...cursoRoutes,
  ...resultEstRoutes,
  ...sumillasFormRoutes,
];
