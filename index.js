const fs = require('fs');
const http  = require('http');

// const textIn = fs.readFileSync('./start.txt', 'utf8');
// console.log(textIn);
// const textOut = `First: ${textIn}`;
// fs.writeFileSync('./output/end.txt', textOut);
// fs.mkdirSync('./outputTest');
// console.log(textOut);

// fs.readFile('./start.txt', 'utf8',  (err, data1) =>  {
//     if(err) {console.log(err);}
//     fs.readFile('./end.txt', 'utf8', (err, data2) => {
//         if(err) {console.log(err);}
//         fs.writeFile('./output2/concat.txt', data1 + data2, (err) => {
//             if (err) {console.log(err);}
//         });
//     });
// });

// console.log('Will read file!');

const server = http.createServer((req, res) => {
    
    const pathname = req.url;

    if (pathname === '/') {
        res.end('Hello World from server! You are on the home page.');
    }
    else if (pathname === '/products') {
        res.end('Hello World from server! You are on the products page, buy something.');
    }
    else{  
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Hello World from server! Content not found.</h1>');
    }

    //console.log('Request was made: ' + req.url);
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.end("Will send response");
});
 // Challenge FDS - Import restaurant data from JSON file, and display it on the page. Create route for multiple restaurants. Create a route for a single restaurant.
 
server.listen(3000, '127.0.0.1', () => {
    console.log('Nodemon Server is listening on port 3000');
});
