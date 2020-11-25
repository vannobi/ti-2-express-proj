"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultEstRoutes = void 0;
const ResultadosEstController_1 = require("../controller/ResultadosEstController");
exports.resultEstRoutes = [
    {
        method: 'get',
        route: '/resultado_est',
        controller: ResultadosEstController_1.ResultadosEstController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/resultado_est/:id',
        controller: ResultadosEstController_1.ResultadosEstController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/resultado_est',
        controller: ResultadosEstController_1.ResultadosEstController,
        action: 'save',
    },
    {
        method: 'delete',
        route: '/resultado_est/:id',
        controller: ResultadosEstController_1.ResultadosEstController,
        action: 'remove',
    },
];
//# sourceMappingURL=resultadosEstudiante.js.map