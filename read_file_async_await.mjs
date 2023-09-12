import { readFile } from 'node:fs/promises'

console.log('Reading file...');
const firstText = await readFile('./file.txt', 'utf-8')
console.log('File 01:  ', firstText);

console.log('Reading file...');
const secondText = await readFile('./file02.txt', 'utf-8')
console.log('File 02:  ', secondText);