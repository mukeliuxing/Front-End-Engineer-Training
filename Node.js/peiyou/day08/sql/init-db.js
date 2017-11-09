/*
 * https:/github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 16:23
 */
const cp = require('child_process');

const mysqlPath = 'D:/dev/mariadb-10.2.10-winx64/bin/mysql';
const user = 'root';
const password = 'system';
const sqlFile = __dirname + '/user-book.sql';

cp.exec(mysqlPath + ' -u' + user + ' -p' + password + " < " + sqlFile, (error, stdout, stderr) => {
    if (error) throw error;
    console.log('database initialized...');
});