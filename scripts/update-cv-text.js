const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const PDFParser = require('pdf2json');
const cvUrl = process.env.CV_URL;

async function getCvText() {
  const pdfParser = new PDFParser(null, true /* can get raw text */);

  const pdfParserPromise = new Promise((resolve, reject) => {
    pdfParser.on('pdfParser_dataReady', () => {
      resolve(pdfParser.getRawTextContent());
    });
    pdfParser.on('pdfParser_dataError', (error) => {
      reject(error);
    });
  });

  const response = await fetch(cvUrl);
  const arrayBuffer = await response.arrayBuffer();
  pdfParser.parseBuffer(Buffer.from(arrayBuffer));

  const text = await pdfParserPromise;
  return text;
}

function updateCvText() {
  // TODO: utilize pcloud API to upload the text content to a file
}

async function main() {
  const cvText = await getCvText();
  console.log('Latest CV text:\n', cvText);
  // updateCvText(cvText);
}

main();
