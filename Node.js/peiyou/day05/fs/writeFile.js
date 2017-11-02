/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/2 17:18
 */

const fs = require('fs');

fs.writeFile(__dirname + '/some_file', 'data...', (error) => {
    console.log(error);
});