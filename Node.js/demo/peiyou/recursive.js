/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/19 11:24
 */


function sum(i) {
    if (i === 1) {
        console.trace('trace: ' + i);
        return 1;
    } else {
        return i + sum(i - 1);
    }
}

let result = sum(3);