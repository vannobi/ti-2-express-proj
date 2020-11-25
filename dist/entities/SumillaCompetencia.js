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
exports.SumillaCompetencia = void 0;
const typeorm_1 = require("typeorm");
const Sumilla_1 = require("./Sumilla");
const Competencia_1 = require("./Competencia");
let SumillaCompetencia = class SumillaCompetencia extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'sum_com_ide' }),
    __metadata("design:type", Number)
], SumillaCompetencia.prototype, "sumComIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'com_ide', nullable: true }),
    __metadata("design:type", Number)
], SumillaCompetencia.prototype, "comIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'sum_ide', nullable: true }),
    __metadata("design:type", Number)
], SumillaCompetencia.prototype, "sumIde", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Sumilla_1.Sumilla, sumilla => sumilla.sumillaCompetencias, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'sum_ide', referencedColumnName: 'sumIde' }]),
    __metadata("design:type", Sumilla_1.Sumilla)
], SumillaCompetencia.prototype, "sumIde2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Competencia_1.Competencia, competencia => competencia.sumillaCompetencias, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'com_ide', referencedColumnName: 'comIde' }]),
    __metadata("design:type", Competencia_1.Competencia)
], SumillaCompetencia.prototype, "comIde2", void 0);
SumillaCompetencia = __decorate([
    typeorm_1.Index('com_ide', ['comIde'], {}),
    typeorm_1.Index('sum_ide', ['sumIde'], {}),
    typeorm_1.Entity('Sumilla_competencia')
], SumillaCompetencia);
exports.SumillaCompetencia = SumillaCompetencia;
//# sourceMappingURL=SumillaCompetencia.js.map