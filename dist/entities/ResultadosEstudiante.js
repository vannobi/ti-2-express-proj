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
exports.ResultadosEstudiante = void 0;
const typeorm_1 = require("typeorm");
const SumillaResultado_1 = require("./SumillaResultado");
let ResultadosEstudiante = class ResultadosEstudiante extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'res_est_ide' }),
    __metadata("design:type", Number)
], ResultadosEstudiante.prototype, "resEstIde", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'rest_est_cod', nullable: true, length: 10 }),
    __metadata("design:type", String)
], ResultadosEstudiante.prototype, "restEstCod", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'res_est_nom', nullable: true, length: 50 }),
    __metadata("design:type", String)
], ResultadosEstudiante.prototype, "resEstNom", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'res_est_des', nullable: true, length: 300 }),
    __metadata("design:type", String)
], ResultadosEstudiante.prototype, "resEstDes", void 0);
__decorate([
    typeorm_1.OneToMany(() => SumillaResultado_1.SumillaResultado, sumillaResultado => sumillaResultado.resEstIde2),
    __metadata("design:type", Array)
], ResultadosEstudiante.prototype, "sumillaResultados", void 0);
ResultadosEstudiante = __decorate([
    typeorm_1.Entity('Resultados_estudiante')
], ResultadosEstudiante);
exports.ResultadosEstudiante = ResultadosEstudiante;
//# sourceMappingURL=ResultadosEstudiante.js.map