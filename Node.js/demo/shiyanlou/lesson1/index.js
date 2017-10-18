/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/18 10:32
 */
const express = require('express');

let app = express();

app.get('/', (req, res) => {
    console.log('It works.');
});

app.listen(80, ()=>{
    console.log(':80');
});



