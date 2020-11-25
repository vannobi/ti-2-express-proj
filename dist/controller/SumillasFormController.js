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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumillasFormController = void 0;
const typeorm_1 = require("typeorm");
const BibTex_1 = require("../util/BibTex");
class SumillasFormController {
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = typeorm_1.getConnection();
            const { curIde, sumFund, sumResultados, sumCompetencias, sumContenidos, } = request.body;
            let logs = [];
            const queryRunner = conn.createQueryRunner();
            yield queryRunner.startTransaction();
            try {
                for (let content of sumContenidos) {
                    const { unidadAcademica, topico, bibliografiaUnidad } = content;
                    const { sumIde, uniAcaNom, horas, comIde } = unidadAcademica;
                    let _newUniAcaId;
                    const { bibliografia } = bibliografiaUnidad;
                    for (let bib of bibliografia) {
                        if (bib.new) {
                            console.log('BIBTEX__________________');
                            const Book = BibTex_1.extractBookFeatures(`${bib.bibtex}`);
                            console.log(Book);
                        }
                        else if (!bib.new && bib.bibIde) {
                            console.log({ id: bib.bibIde });
                        }
                    }
                }
            }
            catch (error) {
                console.log(error);
                logs.push({ error });
            }
            finally {
                yield queryRunner.release();
                logs.push('Done');
            }
            return new Promise((res, rej) => {
                res(logs);
            });
        });
    }
}
exports.SumillasFormController = SumillasFormController;
//# sourceMappingURL=SumillasFormController.js.map