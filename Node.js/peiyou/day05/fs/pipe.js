/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/3 9:42
 */

const fs = require('fs');

let reader = fs.createReadStream(__filename);
let writer = fs.createWriteStream('./test_file');

reader.pipe(writer);

reader.on('end', () => {
    console.log('copy finish.');
});