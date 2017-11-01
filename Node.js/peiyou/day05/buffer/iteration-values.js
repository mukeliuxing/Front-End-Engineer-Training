/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/1 11:06
 */

const buf = Buffer.from([1, 2, 3]); // Buffer.allocUnsafe(16);

for (let value of buf.values()) {
    console.log(value);
}

