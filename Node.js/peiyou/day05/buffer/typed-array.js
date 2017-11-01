/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/1 10:58
 */

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf1 = Buffer.from(arr);
const buf2 = Buffer.from(arr.buffer);

console.log(buf1);
console.log(buf2);