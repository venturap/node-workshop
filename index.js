const { Console } = require('console');
const fs = require('fs');

// const textIn = fs.readFileSync('./start.txt', 'utf8');
// console.log(textIn);
// const textOut = `First: ${textIn}`;
// fs.writeFileSync('./output/end.txt', textOut);
// fs.mkdirSync('./outputTest');
// console.log(textOut);

fs.readFile('./start.txt', 'utf8',  (err, data1) =>  {
    if(err) {console.log(err);}
    fs.readFile('./end.txt', 'utf8', (err, data2) => {
        if(err) {console.log(err);}
        fs.writeFile('./output2/concat.txt', data1 + data2, (err) => {
            if (err) {console.log(err);}
        });
    });
});

console.log('Will read file!');