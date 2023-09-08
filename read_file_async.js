const fs = require('node:fs');

console.log('Reading file...');
fs.readFile('./file.txt', 'utf-8', (err, text) => {
    console.log('File 01:  ', text);
})

console.log('Reading file...');
fs.readFile('./file02.txt', 'utf-8', (err, text) => {
    console.log('File 02:  ', text);
})