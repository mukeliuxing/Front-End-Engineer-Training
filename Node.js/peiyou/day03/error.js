/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/24 15:13
 */

// try {
setImmediate(() => {
    test
});
// } catch (err) {
//     console.log(err);
// }

console.log('test...');

process.stdin.resume();

process.on('uncaughtException', (err) => {
    console.log(err);
});


process.env.= 1;
console.log(process.env.TEST);
