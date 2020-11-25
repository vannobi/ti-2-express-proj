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
exports.BibliografiaUnidad = void 0;
const typeorm_1 = require("typeorm");
const Bibliografia_1 = require("./Bibliografia");
const UnidadAcademica_1 = require("./UnidadAcademica");
let BibliografiaUnidad = class BibliografiaUnidad extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'bib_uni_ide' }),
    __metadata("design:type", Number)
], BibliografiaUnidad.prototype, "bibUniIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'bib_ide', nullable: true }),
    __metadata("design:type", Number)
], BibliografiaUnidad.prototype, "bibIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'uni_aca_ide', nullable: true }),
    __metadata("design:type", Number)
], BibliografiaUnidad.prototype, "uniAcaIde", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Bibliografia_1.Bibliografia, bibliografia => bibliografia.bibliografiaUnidads, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'bib_ide', referencedColumnName: 'bibIde' }]),
    __metadata("design:type", Bibliografia_1.Bibliografia)
], BibliografiaUnidad.prototype, "bibIde2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => UnidadAcademica_1.UnidadAcademica, unidadAcademica => unidadAcademica.bibliografiaUnidads, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    typeorm_1.JoinColumn([{ name: 'uni_aca_ide', referencedColumnName: 'uniAcaIde' }]),
    __metadata("design:type", UnidadAcademica_1.UnidadAcademica)
], BibliografiaUnidad.prototype, "uniAcaIde2", void 0);
BibliografiaUnidad = __decorate([
    typeorm_1.Index('bib_ide', ['bibIde'], {}),
    typeorm_1.Index('uni_aca_ide', ['uniAcaIde'], {}),
    typeorm_1.Entity('Bibliografia_unidad')
], BibliografiaUnidad);
exports.BibliografiaUnidad = BibliografiaUnidad;
//# sourceMappingURL=BibliografiaUnidad.js.map