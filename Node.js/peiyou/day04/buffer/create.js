/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/30 10:32
 */

const buf1 = Buffer.alloc(1024);
console.log(buf1);

const buf2 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64]);
console.log(buf2);

const buf3 = Buffer.from('一', 'utf8');
console.log(buf3);
console.log(buf3.toString('utf8'));

// 11100100 10111000 10000000
// 111001001011100010000000

