/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 10:57
 */

process.on('exit', () => {
    process.nextTick(() => { // todo
        console.log('This will not run.');
    });
    console.log('About to exit.');
});