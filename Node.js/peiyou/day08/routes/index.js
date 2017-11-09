/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 11:56
 */

module.exports = function (app) {
    app.use(express.static(__dirname + '/public'));
};