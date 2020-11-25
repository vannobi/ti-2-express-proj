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
exports.CursoController = void 0;
const typeorm_1 = require("typeorm");
const Curso_1 = require("../entities/Curso");
class CursoController {
    constructor() {
        this.cursoRepository = typeorm_1.getRepository(Curso_1.Curso);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cursoRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cursoRepository.findOne(request.params.id);
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cursoRepository.save(request.body);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let cursoToRemove = yield this.cursoRepository.findOne(request.params.id);
            return this.cursoRepository.remove(cursoToRemove);
        });
    }
}
exports.CursoController = CursoController;
//# sourceMappingURL=CursoController.js.map