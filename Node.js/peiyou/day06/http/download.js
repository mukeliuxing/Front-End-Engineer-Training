/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/5 13:03
 */

const http = require('http');

const options = {
    host: 'jandan.net',
    path: '/tag/nasa',
    headers: {'User-Agent': 'Mozilla/5.0'}
};

http.get(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        let links = data.toString().split(/(?:\r\n|\n)/);
        let i = 0;
        for (let link of links) {
            if (link.includes('data-original')) {
                let path = link.substring(link.indexOf('img.jandan.net') + 'img.jiandan.net'.length, link.indexOf('jpg')) + 'jpg';
                console.log(path);
            }
        }
    });
});