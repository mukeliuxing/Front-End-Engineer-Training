/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/8 17:50
 */

const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('SELECT e.ename, d.dname FROM scott.emp e INNER JOIN scott.dept d ON e.deptno = d.deptno', (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });
});
