/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/26 17:16
 */

const fs = require('fs');

// console.time('test');

console.log('---start');
setImmediate(() => {
    console.log('a');
    fs.readFileSync('./test.pdf');
});

setImmediate(() => {
    console.log('b');
    fs.readFileSync('./test.pdf');
});

setImmediate(() => {
    console.log('c');
    fs.readFileSync('./test.pdf');
});
console.log('---end');

// console.timeEnd('test');