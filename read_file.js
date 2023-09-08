const fs = require('node:fs');

console.log('Reading file...');
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text);

console.log('Reading file...');
const text02 = fs.readFileSync('./file02.txt', 'utf-8')
console.log(text02);