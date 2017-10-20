/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 14:45
 */

/*
* process.nextTick(callback);
* */

process.nextTick(() => {
    console.log('nextTick callback.');
});

console.log('foo');

// todo Vs. setTimeout(fn, 0);