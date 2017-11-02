/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/2 17:02
 */

const fs = require('fs');

try {
    fs.readFile(__filename, (err, data) => {
        // if(err) throw err;
        // test error
        console.log(data.toString());
    });
} catch (err) {
    console.log(err);
}

console.log('end');

process.on('uncaughtException', (err) => {
    console.log(err);
});
