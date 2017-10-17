const http = require('http');

http.createServer((req, res) => { // JavaScript
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Node.js!\n');
}).listen(80, '127.0.0.1');