/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 15:40
 */

let id = setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        if (i === 10) {
            clearTimeout(id);
        }
    }
}, 1000);

// todo