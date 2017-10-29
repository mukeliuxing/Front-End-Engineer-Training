/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/24 11:57
 */

const dns = require('dns');
dns.resolve('github.com', (err, addr) => {
    console.log(`addr1: ${addr}`);
});

dns.lookup('bing.com', (err, addr, family) => {
    console.log(`addr2: ${addr}; family: ${family}`);
});

dns.reverse('192.30.255.113', (err, hostname) => {
    console.log(`hostname3: ${hostname}`);
});

console.log('4: '+dns.getServers());