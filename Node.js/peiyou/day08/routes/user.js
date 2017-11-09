/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 10:43
 */



module.exports = function (app) {
    app.post('/signIn', (req, res) => {
        console.log('username: ' + req.body.username);
        console.log('password: ' + req.body.password);


    });
}