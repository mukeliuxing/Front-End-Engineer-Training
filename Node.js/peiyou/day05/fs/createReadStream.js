/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/3 9:18
 */

const fs = require('fs');

let reader = fs.createReadStream(__filename);

reader.on('data', (chunk) => {
    console.log(chunk.toString());
});

reader.on('end', () => {
    console.log('end...');
});

console.log('game over...');