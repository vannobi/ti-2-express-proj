"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoRoutes = void 0;
const CursoController_1 = require("../controller/CursoController");
exports.cursoRoutes = [
    {
        method: 'get',
        route: '/cursos',
        controller: CursoController_1.CursoController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/cursos/:id',
        controller: CursoController_1.CursoController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/cursos',
        controller: CursoController_1.CursoController,
        action: 'save',
    },
    {
        method: 'delete',
        route: '/cursos/:id',
        controller: CursoController_1.CursoController,
        action: 'remove',
    },
];
//# sourceMappingURL=curso.js.map