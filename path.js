const path = require('node:path');

console.log(path.sep) // Tells how is the route written in your OS.

const filePath = path.join('/', 'textFolder', 'test.txt')
console.log(filePath);

const base = path.basename('/src/content/textFolder/test.txt')
console.log(base);

const base02 = path.basename('/src/content/textFolder/test.txt', '.txt')
console.log(base02);

const ext = path.extname('image.png')
console.log(ext);