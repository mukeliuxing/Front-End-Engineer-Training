/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 10:43
 */

const mysql = require('mysql');
const path = require('path');

let pool = mysql.createPool({
    user: 'root',
    password: 'system',
    connectionLimit: 10
});
module.exports = function (app) {
    app.post('/signIn', (req, res) => {
        pool.query('SELECT * FROM db_user_book.user WHERE username=? AND password=?', [req.body.username, req.body.password], (error, results, fields) => {
            if (error) throw error;
            if (results.length === 1) {
                res.redirect(path.join(__dirname + '../public/index.html'));
            } else {
                res.redirect(path.join(__dirname + '../public/default.html'));
            }
        })
    });
};