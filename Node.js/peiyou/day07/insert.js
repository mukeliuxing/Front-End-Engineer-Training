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

/*
connection.connect((error) => {
    if(error) throw error;
    console.log('connected...');
    let sql = 'INSERT INTO scott.test(username, password) VALUES ?';
    let values = [
        ['user1', 'pass1'],
        ['user2', 'pass2'],
        ['user3', 'pass3']
    ];
    connection.query(sql, [values], (error, results, fields) => {
        if (error) throw error;
        console.log(results.insertId);
    });
});
*/
