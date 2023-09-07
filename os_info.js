const os = require('node:os');

console.log('Operative System Information')
console.log('----------------------------')

console.log("Name: " + os.platform())
console.log("Version: " + os.release())
console.log("Architecture: " + os.arch())
console.log("CPU's: " + os.cpus())
console.log("Version: " + os.release())
console.log("Free Memory: " + os.freemem() / 1024 / 1024)
console.log("Total Memory: " + os.totalmem() / 1024 / 1024)
console.log("Uptime: " + os.uptime() / 60 / 60)
