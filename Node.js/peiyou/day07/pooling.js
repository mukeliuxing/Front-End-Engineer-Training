/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/6 16:48
 */

const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'system',
    database: 'scott'
});

pool.query('select 1+1 AS solution', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
    console.log(fields);
});

/*
pool.getConnection((error, connection) => {
    connection.query('select 1+1 AS solution', (error, result, fields) => {
        connection.release();
        if (error) throw error;
    });
});
*/
