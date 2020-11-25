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
exports.Sumilla = void 0;
const typeorm_1 = require("typeorm");
const Curso_1 = require("./Curso");
const SumillaCompetencia_1 = require("./SumillaCompetencia");
const SumillaResultado_1 = require("./SumillaResultado");
const UnidadAcademica_1 = require("./UnidadAcademica");
let Sumilla = class Sumilla extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'sum_ide' }),
    __metadata("design:type", Number)
], Sumilla.prototype, "sumIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'sum_curso', nullable: true }),
    __metadata("design:type", Number)
], Sumilla.prototype, "sumCurso", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'sum_fund', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Sumilla.prototype, "sumFund", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Curso_1.Curso, curso => curso.sumillas, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'sum_curso', referencedColumnName: 'curIde' }]),
    __metadata("design:type", Curso_1.Curso)
], Sumilla.prototype, "sumCurso2", void 0);
__decorate([
    typeorm_1.OneToMany(() => SumillaCompetencia_1.SumillaCompetencia, sumillaCompetencia => sumillaCompetencia.sumIde2),
    __metadata("design:type", Array)
], Sumilla.prototype, "sumillaCompetencias", void 0);
__decorate([
    typeorm_1.OneToMany(() => SumillaResultado_1.SumillaResultado, sumillaResultado => sumillaResultado.sumIde2),
    __metadata("design:type", Array)
], Sumilla.prototype, "sumillaResultados", void 0);
__decorate([
    typeorm_1.OneToMany(() => UnidadAcademica_1.UnidadAcademica, unidadAcademica => unidadAcademica.sumIde2),
    __metadata("design:type", Array)
], Sumilla.prototype, "unidadAcademicas", void 0);
Sumilla = __decorate([
    typeorm_1.Index('sum_curso', ['sumCurso'], {}),
    typeorm_1.Entity('Sumilla')
], Sumilla);
exports.Sumilla = Sumilla;
//# sourceMappingURL=Sumilla.js.map