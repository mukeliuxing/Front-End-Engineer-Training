/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/18 16:23
 */

// function (i) {
//     arguments.callee(i);
// }

setTimeout(function () {
    console.log(this);
}, 1000);
setTimeout(() => {
    console.log(this);
}, 1000);

for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

