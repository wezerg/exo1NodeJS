const fs = require('fs');
// Impression du fichier txt
console.log(fs.readFileSync(__dirname + '/log.txt', {encoding: 'utf-8'}));
// Impression du fichier html
console.log(fs.readFileSync(__dirname + '/../assets/index.html', {encoding: 'utf-8'}));