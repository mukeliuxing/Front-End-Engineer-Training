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
        console.log(req.body.username);
        pool.query('SELECT * FROM db_user_book.user WHERE username = ? AND password = ?', [req.body.username, req.body.password], (error, results, fields) => {
            if (error) throw error;
            if (results.length === 1) {
                req.session.username = req.body.username;
                req.session.password = req.body.password;
                console.log('---' + req.session.username );
                console.log('---' + req.session.password );
                res.redirect('/home')
                // res.sendFile(path.join(__dirname, '../public/home.html'));
            } else {
                res.sendFile(path.join(__dirname, '../public/index.html'));
            }
        })
    });

    app.post('/signUp', (req, res) => {
        pool.getConnection((error, connection) => {
            connection.query('INSERT INTO db_user_book.user VALUES(NULL, ?, ?)', [req.body.username, req.body.password], (error, results, fields) => {
                if (error) throw error;
                if (results.affectedRows === 1) {
                    res.sendFile(path.join(__dirname, '../public/index.html'))
                } else {
                    res.sendFile(path.join(__dirname, '../public/sign-up.html'))
                }
            });
            connection.release();
        });
    })
};