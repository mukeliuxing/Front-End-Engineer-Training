/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/1 10:21
 */

const buf = Buffer.from('Hello, Node.js!');

console.log(buf.toString('utf8'));
console.log(buf.toString('ascii'));
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('binary'));
console.log(buf.toString('latin1'));