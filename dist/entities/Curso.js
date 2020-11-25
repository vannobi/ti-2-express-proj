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
exports.Curso = void 0;
const typeorm_1 = require("typeorm");
const Sumilla_1 = require("./Sumilla");
const Prerequisito_1 = require("./Prerequisito");
let Curso = class Curso extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'cur_ide' }),
    __metadata("design:type", Number)
], Curso.prototype, "curIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_credi', nullable: true }),
    __metadata("design:type", Number)
], Curso.prototype, "curCredi", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_sem', nullable: true }),
    __metadata("design:type", Number)
], Curso.prototype, "curSem", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_hor_teo', nullable: true }),
    __metadata("design:type", Number)
], Curso.prototype, "curHorTeo", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_hor_pra', nullable: true }),
    __metadata("design:type", Number)
], Curso.prototype, "curHorPra", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_hor_lab', nullable: true }),
    __metadata("design:type", Number)
], Curso.prototype, "curHorLab", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'cur_nom', nullable: true, length: 80 }),
    __metadata("design:type", String)
], Curso.prototype, "curNom", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'cur_cod', nullable: true, length: 15 }),
    __metadata("design:type", String)
], Curso.prototype, "curCod", void 0);
__decorate([
    typeorm_1.OneToMany(() => Sumilla_1.Sumilla, sumilla => sumilla.sumCurso2),
    __metadata("design:type", Array)
], Curso.prototype, "sumillas", void 0);
__decorate([
    typeorm_1.OneToMany(() => Prerequisito_1.Prerequisito, prerequisito => prerequisito.curIde2),
    __metadata("design:type", Array)
], Curso.prototype, "prerequisitos", void 0);
__decorate([
    typeorm_1.OneToMany(() => Prerequisito_1.Prerequisito, prerequisito => prerequisito.curIdePre2),
    __metadata("design:type", Array)
], Curso.prototype, "prerequisitos2", void 0);
Curso = __decorate([
    typeorm_1.Entity('Curso')
], Curso);
exports.Curso = Curso;
//# sourceMappingURL=Curso.js.map