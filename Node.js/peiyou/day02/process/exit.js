/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 11:51
 */

/*
process.exit(1);

process.getgid();

console.log('Current id: ' + process.getgid()); // only for POSIX /ˈpɒz.ɪks/
*/


process.on('exit', () => {
    setTimeout(() => {
        console.log('This will not run.');
    }, 100);
    console.log('Bye.');
});