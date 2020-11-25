"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const competencia_1 = require("./competencia");
const curso_1 = require("./curso");
const resultadosEstudiante_1 = require("./resultadosEstudiante");
const sumillasForm_1 = require("./sumillasForm");
exports.default = [
    ...competencia_1.competenciaRoutes,
    ...curso_1.cursoRoutes,
    ...resultadosEstudiante_1.resultEstRoutes,
    ...sumillasForm_1.sumillasFormRoutes,
];
//# sourceMappingURL=routes.js.map