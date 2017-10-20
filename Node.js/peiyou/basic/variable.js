/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/18 15:38
 */
"use strict"
var i = 1;

console.log(i);

console.log(i);

function test() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    for (; i < 10; i++) {
        console.log(i);
    }
}

test();
