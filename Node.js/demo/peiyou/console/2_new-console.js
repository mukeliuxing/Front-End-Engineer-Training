/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/19 17:56
 */

/*
* console(stdout[,stderr]);
* */

const fs = require('fs');

const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream('./stderr.log');

const logger = new Console(output, errOutput);

const count = 5;

logger.log('Count: d%', count);