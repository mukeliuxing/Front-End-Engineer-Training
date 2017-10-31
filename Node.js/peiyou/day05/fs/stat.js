/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/30 15:24
 */

const fs = require('fs');
fs.stat(__filename, (err, stat) => {
    // console.log(err);
    console.log(stat);
});
console.log(__filename);
