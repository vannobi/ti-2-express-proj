"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competenciaRoutes = void 0;
const CompetenciaController_1 = require("../controller/CompetenciaController");
exports.competenciaRoutes = [
    {
        method: 'get',
        route: '/competencias',
        controller: CompetenciaController_1.CompetenciaController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/competencias/:id',
        controller: CompetenciaController_1.CompetenciaController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/competencias',
        controller: CompetenciaController_1.CompetenciaController,
        action: 'save',
    },
    {
        method: 'delete',
        route: '/competencias/:id',
        controller: CompetenciaController_1.CompetenciaController,
        action: 'remove',
    },
];
//# sourceMappingURL=competencia.js.map