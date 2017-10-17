const http = require('http');
const express = require('express');

var app = express();
var server = http.createServer(app);
server.listen(80);

app.get('/', (req, resp) => {
    // console.log(req);
    // resp.send('80OK');
    console.log(req.query.username);
    resp.json({k1: 'v1', k2: 1, k3: true});
});



















































