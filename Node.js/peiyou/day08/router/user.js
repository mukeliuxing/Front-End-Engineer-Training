/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 10:43
 */

const express = require('express');
const fs = require('fs');

const app = new express();

app.get('/', (req, resp) => {
    resp.send(fs.readFile('index.html'));
});

app.post('signIn', (req, resp) => {
    console.log(req);
});

app.listen(80);