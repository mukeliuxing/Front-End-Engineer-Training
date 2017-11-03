/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/2 16:54
 */

const fs = require('fs');
fs.readdir(__dirname, (err, files) => {
    console.log(files);
});