/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/24 11:57
 */

const dns = require('dns');
dns.resolve('bing.com', (err, addr) => {
    console.log(addr);
});

dns.lookup('bing.com', (err, addr, family) => {
    console.log(addr);
});

dns.reverse('204.79.197.200', (err, hostname) => {
    console.log(hostname);
});

console.log(dns.getServers());