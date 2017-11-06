/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/6 16:38
 */

const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((err) => {
    if(err) {
        console.log('error.');
    } else {
        console.log('connected: ' + connection.threadId);
    }
})