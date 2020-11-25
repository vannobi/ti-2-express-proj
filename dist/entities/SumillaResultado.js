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
exports.SumillaResultado = void 0;
const typeorm_1 = require("typeorm");
const Sumilla_1 = require("./Sumilla");
const ResultadosEstudiante_1 = require("./ResultadosEstudiante");
let SumillaResultado = class SumillaResultado extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'sum_res_ide' }),
    __metadata("design:type", Number)
], SumillaResultado.prototype, "sumResIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'sum_ide', nullable: true }),
    __metadata("design:type", Number)
], SumillaResultado.prototype, "sumIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'res_est_ide', nullable: true }),
    __metadata("design:type", Number)
], SumillaResultado.prototype, "resEstIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'sum_res_nivel', nullable: true }),
    __metadata("design:type", Number)
], SumillaResultado.prototype, "sumResNivel", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Sumilla_1.Sumilla, sumilla => sumilla.sumillaResultados, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'sum_ide', referencedColumnName: 'sumIde' }]),
    __metadata("design:type", Sumilla_1.Sumilla)
], SumillaResultado.prototype, "sumIde2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ResultadosEstudiante_1.ResultadosEstudiante, resultadosEstudiante => resultadosEstudiante.sumillaResultados, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    typeorm_1.JoinColumn([{ name: 'res_est_ide', referencedColumnName: 'resEstIde' }]),
    __metadata("design:type", ResultadosEstudiante_1.ResultadosEstudiante)
], SumillaResultado.prototype, "resEstIde2", void 0);
SumillaResultado = __decorate([
    typeorm_1.Index('res_est_ide', ['resEstIde'], {}),
    typeorm_1.Index('sum_ide', ['sumIde'], {}),
    typeorm_1.Entity('Sumilla_resultado')
], SumillaResultado);
exports.SumillaResultado = SumillaResultado;
//# sourceMappingURL=SumillaResultado.js.map