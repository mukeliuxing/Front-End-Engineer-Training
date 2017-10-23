/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 14:33
 */

/*
* process.kill(pid, signal='SIGTERM');
* */

process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.');
});

setTimeout(() => {
    console.log('Existing.');
    process.exit(0);
});

process.kill(process.pid, 'SIGHUP');

// todo