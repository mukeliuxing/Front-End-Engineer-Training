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

connection.connect((error) => {
    if (error) throw error;
    connection.query('update scott.test set username=? where id=?', ['Jerry', '1'], (error, results, fields) => {
        if (error) throw error;
        console.log(results.affectedRows);
    });
});

