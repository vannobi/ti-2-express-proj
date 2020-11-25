"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumillasFormRoutes = void 0;
const SumillasFormController_1 = require("../controller/SumillasFormController");
exports.sumillasFormRoutes = [
    {
        method: 'post',
        route: '/sumillas-form',
        controller: SumillasFormController_1.SumillasFormController,
        action: 'save',
    },
];
//# sourceMappingURL=sumillasForm.js.map