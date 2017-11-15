/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/13 13:31
 */

function sleep(millis) {
    let start = Date.now();
    while (Date.now() - start < millis) {
    }
}

console.log('start...');

setTimeout(() => {
    console.log('set immediate...');
}, 3000);

sleep(1000 * 4);

console.log('end...');