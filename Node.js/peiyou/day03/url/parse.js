/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/24 11:04
 */

const url = require('url');

const urlString = 'http://tester:password@www.example.com:81/dir/index.html?name=tester&age=20#anchor';

console.log(url.parse(urlString, true));

const urlObj = {
    protocol: 'http:',
        slashes: true,
        auth: 'tester:password',
        host: 'www.example.com:81',
        port: '81',
        hostname: 'www.example.com',
        hash: '#anchor',
        search: '?name=tester&age=20',
        query: 'name=tester&age=20',
        pathname: '/dir/index.html',
        path: '/dir/index.html?name=tester&age=20',
        href: 'http://tester:password@www.example.com:81/dir/index.html?name=tester&age=20#anchor' };

console.log(url.format(urlObj));

console.log(url.resolve('http://asdf.com/a/b/c/index.html', '/img/bg.jpg'));

const path = require('path');

console.log(path.resolve('path.js')); // 绝对路径

console.log(path.extname('path.js'));