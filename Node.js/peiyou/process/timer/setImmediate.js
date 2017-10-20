/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 16:00
 */

/*
    setImmediate 会在当前的事件循环结束时执行
    代码将在当前事件循环中的任何I/O操作之后以及为下一个事件循环调度的任何计时器之前执行

    在 setTimeout 和 setInterval 事件前，在输入/输出事件后，安排一个 callback "immediate" 立即执行
 */
console.log('before');

setImmediate((arg) => {
    console.log(`immediate: ${arg}`);
}, 'test');

console.log('after');

// todo

/*
    首先是process.nextTick()在任何Immediate以及任何预设I/O之前
    其次是process.nextTick()是不可清除的，一旦执行就不能停止

 */