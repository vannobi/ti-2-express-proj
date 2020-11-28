import fs from 'fs';
import pdf from 'pdfkit';
import express from 'express';

const TEST_PORT_SERVER = 6666;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  let doc = new pdf({
    layout: 'portrait',
    margins: { top: 50, bottom: 50, left: 72, right: 72 },

    info: {
      Title: 'My fabolous document',
      Author: 'Mr Cow',
      //   Subject: 'PDF kit tools',
      //   Text: 's',
      //   ModDate: new Date(Date.now()).toLocaleString(),
    },
  });
});
app.listen(TEST_PORT_SERVER, () => console.log('TEST SERVER:', TEST_PORT_SERVER));

// let pdfDoc = new pdf();
// pdfDoc.pipe(fs.createWriteStream('Sample.pdf'));
// pdfDoc.text('My sample text :D');
// pdfDoc.end();
