/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/8 11:40
 */

const cp = require('child_process');
// D:/dev/mariadb-10.2.10-winx64/bin/mysql
cp.exec('D:/dev/mariadb-10.2.10-winx64/bin/mysql -uroot -psystem < C:\\Users\\front\\WebstormProjects\\Front-End-Engineer-Training\\Node.js\\peiyou\\day07\\scott.sql', (error, stdout, stderr) => {
    if (error) throw error;
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});