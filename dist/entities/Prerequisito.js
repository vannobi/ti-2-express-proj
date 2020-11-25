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
exports.Prerequisito = void 0;
const typeorm_1 = require("typeorm");
const Curso_1 = require("./Curso");
let Prerequisito = class Prerequisito extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'prere_ide' }),
    __metadata("design:type", Number)
], Prerequisito.prototype, "prereIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_ide', nullable: true }),
    __metadata("design:type", Number)
], Prerequisito.prototype, "curIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cur_ide_pre', nullable: true }),
    __metadata("design:type", Number)
], Prerequisito.prototype, "curIdePre", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Curso_1.Curso, curso => curso.prerequisitos, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'cur_ide', referencedColumnName: 'curIde' }]),
    __metadata("design:type", Curso_1.Curso)
], Prerequisito.prototype, "curIde2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Curso_1.Curso, curso => curso.prerequisitos2, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'cur_ide_pre', referencedColumnName: 'curIde' }]),
    __metadata("design:type", Curso_1.Curso)
], Prerequisito.prototype, "curIdePre2", void 0);
Prerequisito = __decorate([
    typeorm_1.Index('cur_ide', ['curIde'], {}),
    typeorm_1.Index('cur_ide_pre', ['curIdePre'], {}),
    typeorm_1.Entity('prerequisito')
], Prerequisito);
exports.Prerequisito = Prerequisito;
//# sourceMappingURL=Prerequisito.js.map