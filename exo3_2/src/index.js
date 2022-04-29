const fs = require('fs');
const path = require('path');
// Impression du fichier txt
console.log(fs.readFileSync(path.join(__dirname, 'log.txt'), {encoding: 'utf-8'}));
// Impression du fichier html
console.log(fs.readFileSync(path.join(__dirname, '../assets/index.html'), {encoding: 'utf-8'}));