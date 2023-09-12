import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./file.txt', 'utf-8'),
    readFile('./file02.txt', 'utf-8')
]).then(([firstText, secondText]) => {
    console.log('File 01:  ', firstText)
    console.log('File 02:  ', secondText)
})