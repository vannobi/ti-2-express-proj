"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const Autor_1 = require("./entities/Autor");
const AutorBibliografia_1 = require("./entities/AutorBibliografia");
const Bibliografia_1 = require("./entities/Bibliografia");
const BibliografiaUnidad_1 = require("./entities/BibliografiaUnidad");
const Competencia_1 = require("./entities/Competencia");
const Curso_1 = require("./entities/Curso");
const Prerequisito_1 = require("./entities/Prerequisito");
const ResultadosEstudiante_1 = require("./entities/ResultadosEstudiante");
const Sumilla_1 = require("./entities/Sumilla");
const SumillaCompetencia_1 = require("./entities/SumillaCompetencia");
const SumillaResultado_1 = require("./entities/SumillaResultado");
const Topico_1 = require("./entities/Topico");
const UnidadAcademica_1 = require("./entities/UnidadAcademica");
const routes_1 = require("./routes");
const PORT = 3000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(express_1.default.json());
    const conn = yield typeorm_1.createConnection({
        type: 'mysql',
        host: 'localhost',
        logging: true,
        port: 3306,
        username: 'test',
        password: 'test',
        database: 'test',
        synchronize: true,
        migrations: [path_1.default.join(__dirname, './migrations/*')],
        entities: [
            Autor_1.Autor,
            AutorBibliografia_1.AutorBibliografia,
            Bibliografia_1.Bibliografia,
            BibliografiaUnidad_1.BibliografiaUnidad,
            Competencia_1.Competencia,
            Curso_1.Curso,
            Prerequisito_1.Prerequisito,
            ResultadosEstudiante_1.ResultadosEstudiante,
            Sumilla_1.Sumilla,
            SumillaCompetencia_1.SumillaCompetencia,
            SumillaResultado_1.SumillaResultado,
            ResultadosEstudiante_1.ResultadosEstudiante,
            Topico_1.Topico,
            UnidadAcademica_1.UnidadAcademica,
        ],
    });
    routes_1.Routes.forEach(route => {
        let controller = new route.controller();
        if (route.action === 'one') {
            app.get(route.route, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield controller.one(req, res, next).catch(error => {
                    res.json(error);
                });
                res.json(result);
            }));
        }
        else if (route.action === 'all') {
            app.get(route.route, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield controller.all(req, res, next).catch(error => {
                    res.json(error);
                });
                res.json(result);
            }));
        }
        else if (route.action === 'save') {
            app.post(route.route, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield controller.save(req, res, next).catch(error => {
                    res.json(error);
                });
                res.json(result);
            }));
        }
        else if (route.action === 'remove') {
            app.delete(route.route, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield controller.remove(req, res, next).catch(error => {
                    res.json(error);
                });
                res.json(result);
            }));
        }
    });
    app.listen(PORT);
    console.log(`listening on ${PORT}`);
});
main().catch(error => {
    console.log(error);
});
//# sourceMappingURL=index.js.map