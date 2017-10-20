/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 15:45
 */

let counter = 0;

let id = setInterval(() => {
    if (counter === 10) {
        clearInterval(id);
    } else {
        console.log(Date.now());
        counter++;
    }
}, 1000);