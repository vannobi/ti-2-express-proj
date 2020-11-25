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
exports.Autor = void 0;
const typeorm_1 = require("typeorm");
const AutorBibliografia_1 = require("./AutorBibliografia");
let Autor = class Autor extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'aut_ide' }),
    __metadata("design:type", Number)
], Autor.prototype, "autIde", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'aut_nom', nullable: true, length: 50 }),
    __metadata("design:type", String)
], Autor.prototype, "autNom", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'aut_ape', nullable: true, length: 50 }),
    __metadata("design:type", String)
], Autor.prototype, "autApe", void 0);
__decorate([
    typeorm_1.OneToMany(() => AutorBibliografia_1.AutorBibliografia, autorBibliografia => autorBibliografia.autIde2),
    __metadata("design:type", Array)
], Autor.prototype, "autorBibliografias", void 0);
Autor = __decorate([
    typeorm_1.Entity('Autor')
], Autor);
exports.Autor = Autor;
//# sourceMappingURL=Autor.js.map