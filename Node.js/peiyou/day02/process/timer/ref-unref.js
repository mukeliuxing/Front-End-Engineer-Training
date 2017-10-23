/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 16:24
 */

let timer = setTimeout(() => {
    console.log('run?');
}, 1000);

timer.unref();

setImmediate(() => {
    timer.ref();
});

/*
    如果一个定时器对象调用unref方法时
    那么这将改变定时器的行为，不会再执行定时器代码，定时器对象将不会保持进程存活，等待执行
    相似的，通过调用ref就能移除unref带来的行为，确保定时器继续执行
*/
