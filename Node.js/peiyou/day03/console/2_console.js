/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/23 10:36
 */

const fs = require('fs');
const Console = console.Console;

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const logger = new Console(out, err);

logger.log('log');
logger.error('err');

