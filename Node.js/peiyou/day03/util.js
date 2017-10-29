/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/29 13:20
 */

var util = require('util');

var util = require('util');

util.isArray([])
// true
util.isArray(new Array)
// true
util.isArray({})
// false

console.log(util.isRegExp(/some regexp/));
// true
console.log(util.isRegExp(new RegExp('another regexp')));
// true
console.log(util.isRegExp({}));
// false

util.isDate(new Date())
// true
util.isDate(Date())
// false (without 'new' returns a String)
util.isDate({})
// false

util.isError(new Error())
// true
util.isError(new TypeError())
// true
util.isError({ name: 'Error', message: 'an error occurred' })
// false