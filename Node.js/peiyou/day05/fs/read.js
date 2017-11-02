/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/2 17:28
 */

const fs = require('fs');

fs.open(__dirname + '/some_file', 'r', (err, fd) => {
    if (err) throw err;
    let buffer = Buffer.alloc(2);
    fs.read(fd, buffer, 0, 2, 0, (err, bytesRead, buffer) => {
        if (err) throw err;
        console.log(bytesRead);
        console.log(buffer.toString());
        fs.close();
    });
});

process.on('uncaughtException', (err) => {
    console.log(err);
});