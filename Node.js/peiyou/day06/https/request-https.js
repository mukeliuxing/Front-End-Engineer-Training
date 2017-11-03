/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/3 11:39
 */

const https = require('https');
const fs = require('fs');

let request = https.request({
    hostname: 'nodejs.org',
    protocol: 'https:',
    path: '/static/images/logo.svg'
});

request.on('response', (res) => {
    console.log('status: ' + res.statusCode);
    // console.log(res.headers);
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        fs.writeFile('./test.svg', data, 'binary', (err) => {
            if (err) throw err;
            console.log('downloaded.');
        });
    });
});

request.end();