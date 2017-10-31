/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/25 16:38
 */
process.env.UV_THREADPOOL_SIZE = 10;
console.log('start...' + process.env.UV_THREADPOOL_SIZE);

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test1...');
});

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test2...');
});

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test3...');
});

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test4...');
});

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test5...');
});

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test6...');
});

setImmediate(() => {
    sleep(1000 * 3);
    console.log('test7...');
});

function sleep(time) {
    let start = new Date().getTime();
    while (new Date().getTime() - start < time) {
    }
}

console.log('end...');
