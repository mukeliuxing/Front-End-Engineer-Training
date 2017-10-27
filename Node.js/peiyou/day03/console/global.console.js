/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/27 16:58
 */

const Console = require('console').Console; // method2
global.console = new Console(process.stdout, process.stderr);

global.console.log('log...');
global.console.error('error...')
