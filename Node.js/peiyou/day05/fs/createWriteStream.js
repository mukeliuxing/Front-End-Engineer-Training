/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/3 9:34
 */

const fs = require('fs');

let writer = fs.createWriteStream('./test_file');

writer.write('data...');

writer.end('end...');

writer.on('finish', () => {
    console.log('finish...');
});