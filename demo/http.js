var http = require('http');
var server = http.createServer();
server.listen(8080);

server.on('request', function (req, resp) {
    console.log('requtest...');
    resp.write('<h1>test...</h1>')
    resp.end();

});