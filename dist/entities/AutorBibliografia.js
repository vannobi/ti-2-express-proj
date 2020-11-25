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
exports.AutorBibliografia = void 0;
const typeorm_1 = require("typeorm");
const Autor_1 = require("./Autor");
const Bibliografia_1 = require("./Bibliografia");
let AutorBibliografia = class AutorBibliografia extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'aut_bib_ide' }),
    __metadata("design:type", Number)
], AutorBibliografia.prototype, "autBibIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'aut_ide', nullable: true }),
    __metadata("design:type", Number)
], AutorBibliografia.prototype, "autIde", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'bib_ide', nullable: true }),
    __metadata("design:type", Number)
], AutorBibliografia.prototype, "bibIde", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Autor_1.Autor, autor => autor.autorBibliografias, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'aut_ide', referencedColumnName: 'autIde' }]),
    __metadata("design:type", Autor_1.Autor)
], AutorBibliografia.prototype, "autIde2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Bibliografia_1.Bibliografia, bibliografia => bibliografia.autorBibliografias, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    typeorm_1.JoinColumn([{ name: 'bib_ide', referencedColumnName: 'bibIde' }]),
    __metadata("design:type", Bibliografia_1.Bibliografia)
], AutorBibliografia.prototype, "bibIde2", void 0);
AutorBibliografia = __decorate([
    typeorm_1.Index('aut_ide', ['autIde'], {}),
    typeorm_1.Index('bib_ide', ['bibIde'], {}),
    typeorm_1.Entity('Autor_bibliografia')
], AutorBibliografia);
exports.AutorBibliografia = AutorBibliografia;
//# sourceMappingURL=AutorBibliografia.js.map