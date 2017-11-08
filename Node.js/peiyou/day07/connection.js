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
    host: '127.0.0.1',
    user: 'root',
    password: 'system',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log('error: ' + err.stack);
        return;
    } else {
        console.log('connected as id: ' + connection.threadId);
    }
});

/*
connection.query('select * from scott.emp', (err, results, fields) => {
    if(err) throw err;
    console.log(results);
    console.log(fields);
});
*/
