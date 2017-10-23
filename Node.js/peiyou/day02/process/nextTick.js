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


setTimeout(() => {
    console.log('timeout.');
}, 0);

process.nextTick(() => {
    console.log('nextTick callback.');
});

for (let i = 0; i < 10; i++) {
    console.log('foo');
}

// todo Vs. setTimeout(fn, 0);