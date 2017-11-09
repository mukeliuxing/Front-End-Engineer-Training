/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/9 10:52
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

require('./routes/default')(app);
require('./routes/index')(app);
require('./routes/user')(app);

app.listen(80);

