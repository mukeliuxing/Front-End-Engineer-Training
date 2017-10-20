/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 14:25
 */

console.log('Versions: ' + JSON.stringify(process.versions, null, '\t'));

let oldmask;
let newmask = 0644; // todo

oldmask = process.umask(newmask);

console.log(oldmask + '->' + newmask);