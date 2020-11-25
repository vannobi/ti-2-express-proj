"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractBookFeatures = void 0;
const citation_js_1 = __importDefault(require("citation-js"));
const extractBookFeatures = str => {
    const book = new citation_js_1.default(str, {
        output: {
            style: 'bibtex',
        },
    });
    const newBib = {
        title: book.data[0].title,
        author: book.data[0].author,
        publisher: book.data[0].publisher,
        URL: book.data[0].URL,
        edition: book.data[0].edition,
        type: book.data[0].type,
        id: book.data[0].id,
    };
    return newBib;
};
exports.extractBookFeatures = extractBookFeatures;
//# sourceMappingURL=BibTex.js.map