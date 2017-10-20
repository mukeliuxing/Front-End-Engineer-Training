/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 11:31
 */

process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    process.stdout.write('data: ' + chunk);
});

process.stdin.on('end', () => { // todo
    process.stdout.write('end.');
});