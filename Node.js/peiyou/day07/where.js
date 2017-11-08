/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/6 16:47
 */

const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('select * from scott.emp where job=?', ['president'], (error, results, fields) => {
        console.log(results);
    })
});

