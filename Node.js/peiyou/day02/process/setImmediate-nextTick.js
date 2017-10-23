/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 17:18
 */
function log(n) { console.log(n); }

/*
setImmediate(function A() {
    setImmediate(function B() {
        log(1);
        setImmediate(function D() { log(2); });
        setImmediate(function E() { log(3); });
    });
    setImmediate(function C() {
        log(4);
        setImmediate(function F() { log(5); });
        setImmediate(function G() { log(6); });
    });
});

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);



process.nextTick(function A() {
    process.nextTick(function B() {
        log(1);
        process.nextTick(function D() { log(2); });
        process.nextTick(function E() { log(3); });
    });
    process.nextTick(function C() {
        log(4);
        process.nextTick(function F() { log(5); });
        process.nextTick(function G() { log(6); });
    });
});

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);
*/


/*
setTimeout(function(){
    console.log('Hello world 5'); // It's waiting like a normal person at a queue
}, 0);

setImmediate(function(){
    console.log('Hello world 4');
    // It's like get to last and be take care of first
    // but always after of .nextTick and before of setInterval(, 0)
});

process.nextTick(function(){
    console.log('Hello world 3'); // It's like be at the bottom at this file
});

console.log('Hello world 1');
console.log('Hello world 2');
*/

console.log("I'm First");

setImmediate(function () {
    console.log('Im setImmediate');
});

console.log("I'm Second");

process.nextTick(function () {
    console.log('Im nextTick');
});

console.log("I'm Last");

setTimeout(() => {
    console.log('timeout...');
},0);
