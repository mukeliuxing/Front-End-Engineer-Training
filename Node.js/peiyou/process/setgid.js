/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 14:01
 */

console.log('Current gid: ' + process.getgid()); // only for POSIX /ˈpɒz.ɪks/

try {
    process.setgid(502);
    console.log('New current gid: ' + process.getgid());
} catch (e) {
    console.log('Failed to set gid: ' + process.getgid());
}