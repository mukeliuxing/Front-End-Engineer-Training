/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/25 15:52
 */

const fs = require('fs');
const util = require('util');

let start = process.hrtime();

for (let i = 0; i < 6; i++) {
    (function (id) {
        fs.readdir('.', function () {
            let end = process.hrtime(start);
            console.log(util.format('read dir %d finished in %d s', id, end[0] + end[1]/1e9));
        });
    })(i);
}