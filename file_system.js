const fs = require('node:fs');

const stats = fs.statSync('./file.txt')

console.log(
    stats.size, // Size in bites
    stats.isFile(), // if is a file
    stats.isDirectory(), // if is a directory
    stats.isSymbolicLink()
)