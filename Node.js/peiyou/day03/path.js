/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/14 10:04
 */

const path = require('path');

console.log(path.normalize('/test1//test2/'));

console.log(path.join(__dirname, '../test1/test2'));

console.log(path.resolve('./path.js'));

console.log(path.extname(__filename));