const fs = require('fs');
console.log(fs.readFileSync('./assets/index.html', {encoding: "utf-8"}));