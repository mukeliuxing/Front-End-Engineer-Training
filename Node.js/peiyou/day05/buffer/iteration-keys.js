/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/11/1 14:20
 */

const buf = Buffer.from([1, 2, 3]);

for (let key of buf.keys()) {
    console.log(`key: ${key}, value: ${buf[key]}`);
}