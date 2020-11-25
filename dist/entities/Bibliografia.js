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
exports.Bibliografia = void 0;
const typeorm_1 = require("typeorm");
const AutorBibliografia_1 = require("./AutorBibliografia");
const BibliografiaUnidad_1 = require("./BibliografiaUnidad");
let Bibliografia = class Bibliografia extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'bib_ide' }),
    __metadata("design:type", Number)
], Bibliografia.prototype, "bibIde", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'bib_nom', nullable: true, length: 100 }),
    __metadata("design:type", String)
], Bibliografia.prototype, "bibNom", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'bib_edici', nullable: true, length: 100 }),
    __metadata("design:type", String)
], Bibliografia.prototype, "bibEdici", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'bib_edito', nullable: true, length: 100 }),
    __metadata("design:type", String)
], Bibliografia.prototype, "bibEdito", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'bib_anio', nullable: true }),
    __metadata("design:type", Number)
], Bibliografia.prototype, "bibAnio", void 0);
__decorate([
    typeorm_1.OneToMany(() => AutorBibliografia_1.AutorBibliografia, autorBibliografia => autorBibliografia.bibIde2),
    __metadata("design:type", Array)
], Bibliografia.prototype, "autorBibliografias", void 0);
__decorate([
    typeorm_1.OneToMany(() => BibliografiaUnidad_1.BibliografiaUnidad, bibliografiaUnidad => bibliografiaUnidad.bibIde2),
    __metadata("design:type", Array)
], Bibliografia.prototype, "bibliografiaUnidads", void 0);
Bibliografia = __decorate([
    typeorm_1.Entity('Bibliografia')
], Bibliografia);
exports.Bibliografia = Bibliografia;
//# sourceMappingURL=Bibliografia.js.map