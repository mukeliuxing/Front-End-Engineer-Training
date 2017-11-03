/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/3 11:25
 */

const http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    res.writeHead(200, 'OK', {'Content-type':'text/html;charset=UTF-8'})
    res.write('test...');
    res.write('测试...');
});

server.listen(80);

server.on('error', (error) => {
    console.log(error);
});