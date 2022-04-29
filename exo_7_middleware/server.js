const http = require('http');

const server = http.createServer((req, res) => {
    try {
        // MiddleWare
        let x = 0;
        const interval = setInterval(() => {
            let x = 0;
            x++;
            console.log(x);
        }, 1000);
        // Controller
        if (req.url === "/") {
            res.writeHead(200, {'content-type':'text/html'});
            res.write('<h1>HOMEPAGE</h1>');
            clearInterval(interval);
            res.end();
        } else {
            res.writeHead(404, {'content-type':'text/html'});
            res.write('<h1>404 Not Found</h1>');
            clearInterval(interval);
            res.end()
        }
    } catch (err) {
        res.writeHead(500, {'content-type':'text/html'});
        res.write('<h1>500 Internal Server Error</h1>');
        res.end()
    }
} );

server.listen(3000);
console.log('Server écoute sur le port 3000');