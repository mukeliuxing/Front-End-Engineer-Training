/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 11:43
 */

console.log('Starting directory: ' + process.cwd());

try {
    process.chdir('/tmp');
    console.log('New directory: ' + process.cwd());
} catch (e) {
    console.log('chdir: ' + e);
}