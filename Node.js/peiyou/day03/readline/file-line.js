/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/27 17:56
 */

const fs = require('fs');
const readline = require('readline');

let filename = process.argv[1];

readline.createInterface({
    input: fs.createReadStream(filename),
    // terminal: false
}).on('line', function (line) {
    console.log('line: ' + line);
});