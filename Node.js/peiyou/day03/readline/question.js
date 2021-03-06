/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/23 17:35
 */

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('question...', (answer) => {
    console.log(`answer: ${answer}`);
    reader.close();
    process.stdin.destroy();
});

// or:
reader.on('close', () => {
    // process.exit();
});

