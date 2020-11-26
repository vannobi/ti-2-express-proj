import Cite from 'citation-js';

interface Bib {
  title: string;
  author: string[];
  publisher: string;
  URL: string;
  edition: string;
  type: string;
  id: string;
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
  };
  return newBib;
};
