/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 11:00
 */

process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
});

setTimeout(() => {
    console.log('This will still run.');
}, 500);

noneExistendFunc();

console.log('This will not run.');