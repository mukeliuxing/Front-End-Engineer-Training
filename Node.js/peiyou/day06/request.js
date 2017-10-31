/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/31 14:06
 */

const http = require('http');

let ip = '59.66.23.56';

let request = http.request({
    protocol: 'http:',
    host: 'ip.taobao.com',
    port: 80,
    method: 'get',
    path: '/service/getIpInfo.php?ip=' + ip
}, (res) => {
    res.on('data', (buf) => {
        console.log(JSON.parse(buf.toString()));
    })
});

request.end();