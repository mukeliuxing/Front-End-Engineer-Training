/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/1 11:06
 */

const buf = Buffer.from([1, 2, 3]); // Buffer.allocUnsafe(16);

console.log(buf);
console.log(buf.length);

for (let obj of buf) {
    console.log(obj);
}

for (let obj of buf.keys()) {
    console.log(obj);
}

for (let obj of buf.values()) {
    console.log(obj);
}

for (let pair of buf.entries()) {
    console.log(pair);
}

