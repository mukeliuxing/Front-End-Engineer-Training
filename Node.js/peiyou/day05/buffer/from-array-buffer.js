/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/1 14:33
 */

const arr = new Uint16Array(2);

arr[0] = 65534;
arr[1] = 65535;

console.log(arr[0]);
console.log(arr[1]);

const buf = Buffer.from(arr.buffer);
console.log(buf);

arr[0] = 65535;
console.log(buf);