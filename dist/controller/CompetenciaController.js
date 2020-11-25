"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetenciaController = void 0;
const typeorm_1 = require("typeorm");
const Competencia_1 = require("../entities/Competencia");
class CompetenciaController {
    constructor() {
        this.competenciaRepo = typeorm_1.getRepository(Competencia_1.Competencia);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.competenciaRepo.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.competenciaRepo.findOne(request.params.id);
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.competenciaRepo.save(request.body);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let compToRemove = yield this.competenciaRepo.findOne(request.params.id);
            return this.competenciaRepo.remove(compToRemove);
        });
    }
}
exports.CompetenciaController = CompetenciaController;
//# sourceMappingURL=CompetenciaController.js.map