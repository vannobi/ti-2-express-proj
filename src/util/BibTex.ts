import Cite from 'citation-js';

export interface Bib {
  title: string;
  author: any[];
  publisher: string;
  URL: string;
  edition: string;
  type: string;
  id: string;
  year: number;
}

export const extractBookFeatures = str => {
  const book = new Cite(str, {
    output: {
      style: 'bibtex',
    },
  });
  const newBib: Bib = {
    title: book.data[0].title,
    author: book.data[0].author,
    publisher: book.data[0].publisher,
    URL: book.data[0].URL,
    edition: book.data[0].edition,
    type: book.data[0].type,
    id: book.data[0].id,
    year: book.data[0].issued['date-parts'][0][0],
  };
  return newBib;
};
