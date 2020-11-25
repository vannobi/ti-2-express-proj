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
exports.UnidadAcademica = void 0;
const typeorm_1 = require("typeorm");
const BibliografiaUnidad_1 = require("./BibliografiaUnidad");
const Topico_1 = require("./Topico");
const Sumilla_1 = require("./Sumilla");
const Competencia_1 = require("./Competencia");
let UnidadAcademica = class UnidadAcademica extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'uni_aca_ide' }),
    __metadata("design:type", Number)
], UnidadAcademica.prototype, "uniAcaIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'com_ide', nullable: true }),
    __metadata("design:type", Number)
], UnidadAcademica.prototype, "comIde", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'uni_aca_nom', nullable: true, length: 50 }),
    __metadata("design:type", String)
], UnidadAcademica.prototype, "uniAcaNom", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'sum_ide', nullable: true }),
    __metadata("design:type", Number)
], UnidadAcademica.prototype, "sumIde", void 0);
__decorate([
    typeorm_1.OneToMany(() => BibliografiaUnidad_1.BibliografiaUnidad, bibliografiaUnidad => bibliografiaUnidad.uniAcaIde2),
    __metadata("design:type", Array)
], UnidadAcademica.prototype, "bibliografiaUnidads", void 0);
__decorate([
    typeorm_1.OneToMany(() => Topico_1.Topico, topico => topico.uniAcaIde2),
    __metadata("design:type", Array)
], UnidadAcademica.prototype, "topicos", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Sumilla_1.Sumilla, sumilla => sumilla.unidadAcademicas, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'sum_ide', referencedColumnName: 'sumIde' }]),
    __metadata("design:type", Sumilla_1.Sumilla)
], UnidadAcademica.prototype, "sumIde2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Competencia_1.Competencia, competencia => competencia.unidadAcademicas, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'com_ide', referencedColumnName: 'comIde' }]),
    __metadata("design:type", Competencia_1.Competencia)
], UnidadAcademica.prototype, "comIde2", void 0);
UnidadAcademica = __decorate([
    typeorm_1.Index('com_ide', ['comIde'], {}),
    typeorm_1.Index('sum_ide', ['sumIde'], {}),
    typeorm_1.Entity('Unidad_academica')
], UnidadAcademica);
exports.UnidadAcademica = UnidadAcademica;
//# sourceMappingURL=UnidadAcademica.js.map