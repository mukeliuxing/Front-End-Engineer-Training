/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 15:31
 */

let start = Date.now();

setTimeout((arg1, arg2) => {
    console.log('times: ' + (Date.now() - start));
    console.log(arg1 + ' & ' + arg2);
}, 1000, 'Tom', 'Jerry');
