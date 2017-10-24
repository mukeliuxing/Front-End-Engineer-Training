/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/24 10:32
 */

const querystring = require('querystring');

let url = 'newwindow=1&q=node+js+difference+between+webstorm+console+and+command+line&spell=1&sa=X&ved=0ahUKEwig6PuKjIjXAhXCslQKHTUeBsYQvwUIJCgA&biw=1536&bih=771';

console.log(querystring.parse(url));
console.log(querystring.stringify(querystring.parse(url)));

console.log('-----');

console.log(querystring.escape('中文'));
console.log(querystring.unescape(querystring.escape('中文')));
