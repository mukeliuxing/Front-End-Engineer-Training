/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/2 17:28
 */

const fs = require('fs');

fs.open(__dirname + '/some_file', 'w', (err, fd) => {
    if (err) throw err;
    const buffer = Buffer.from('hello');
    fs.write(fd, buffer, 0, (err, written, buffer) => {
        if (err) throw err;
        console.log(written);
        console.log(buffer.toString());
        fs.close();
    });
});

process.on('uncaughtException', (err) => {
    console.log(err);
});