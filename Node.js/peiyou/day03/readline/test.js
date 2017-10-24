/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/23 17:35
 */

const readline = require('readline');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question('question...', (answer) => {
    console.log(`answer: ${answer}`);
    r.close();
    process.stdin.destroy();
});

console.log('test...');

r.on('close', () => {
    // process.exit();
});

