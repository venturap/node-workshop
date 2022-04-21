const fs = require('fs');

const textIn = fs.readFileSync('./start.txt', 'utf8');

console.log(textIn);

const textOut = `First ${textIn}`;

fs.writeFileSync('./end.txt', textOut);