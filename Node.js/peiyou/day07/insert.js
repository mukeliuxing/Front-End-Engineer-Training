/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/6 16:46
 */

const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.query('insert into scott.test values(null, ?, ?)', ['Scott', 'tiger'], (error, results, fields) => {
    if (error) throw error;
    console.log(results.insertId);
});
