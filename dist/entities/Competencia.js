"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competencia = void 0;
const typeorm_1 = require("typeorm");
const SumillaCompetencia_1 = require("./SumillaCompetencia");
const UnidadAcademica_1 = require("./UnidadAcademica");
let Competencia = class Competencia extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'com_ide' }),
    __metadata("design:type", Number)
], Competencia.prototype, "comIde", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'com_nom', nullable: true, length: 100 }),
    __metadata("design:type", String)
], Competencia.prototype, "comNom", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'com_des', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Competencia.prototype, "comDes", void 0);
__decorate([
    typeorm_1.OneToMany(() => SumillaCompetencia_1.SumillaCompetencia, sumillaCompetencia => sumillaCompetencia.comIde2),
    __metadata("design:type", Array)
], Competencia.prototype, "sumillaCompetencias", void 0);
__decorate([
    typeorm_1.OneToMany(() => UnidadAcademica_1.UnidadAcademica, unidadAcademica => unidadAcademica.comIde2),
    __metadata("design:type", Array)
], Competencia.prototype, "unidadAcademicas", void 0);
Competencia = __decorate([
    typeorm_1.Entity('Competencia')
], Competencia);
exports.Competencia = Competencia;
//# sourceMappingURL=Competencia.js.map