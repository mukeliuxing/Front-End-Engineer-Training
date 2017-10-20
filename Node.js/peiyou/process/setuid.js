/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 14:24
 */

// only for POSIX /ˈpɒz.ɪks/

console.log('Current uid: ' + process.getuid());
try {
    process.setuid(501);
    console.log('New uid: ' + process.getuid());
}
catch (err) {
    console.log('Failed to set uid: ' + err);
}