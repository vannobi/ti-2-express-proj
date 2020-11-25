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
exports.Topico = void 0;
const typeorm_1 = require("typeorm");
const UnidadAcademica_1 = require("./UnidadAcademica");
let Topico = class Topico extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'top_ide' }),
    __metadata("design:type", Number)
], Topico.prototype, "topIde", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'top_des', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Topico.prototype, "topDes", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'uni_aca_ide', nullable: true }),
    __metadata("design:type", Number)
], Topico.prototype, "uniAcaIde", void 0);
__decorate([
    typeorm_1.ManyToOne(() => UnidadAcademica_1.UnidadAcademica, unidadAcademica => unidadAcademica.topicos, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'uni_aca_ide', referencedColumnName: 'uniAcaIde' }]),
    __metadata("design:type", UnidadAcademica_1.UnidadAcademica)
], Topico.prototype, "uniAcaIde2", void 0);
Topico = __decorate([
    typeorm_1.Index('uni_aca_ide', ['uniAcaIde'], {}),
    typeorm_1.Entity('Topico')
], Topico);
exports.Topico = Topico;
//# sourceMappingURL=Topico.js.map