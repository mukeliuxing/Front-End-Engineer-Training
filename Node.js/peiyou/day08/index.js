/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 10:52
 */

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(80);