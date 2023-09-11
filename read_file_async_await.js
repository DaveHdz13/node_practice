const fs = require('node:fs/promises');

console.log('Reading file...');
const firstText = await fs.readFile('./file.txt', 'utf-8')
console.log('File 01:  ', text);

console.log('Reading file...');
const secondText = await fs.readFile('./file02.txt', 'utf-8')
console.log('File 02:  ', text);