// function (num) {
//     arguments.callee(num - 1);
// } // ?

setTimeout(function () {
    console.log(this);
}, 1000);
setTimeout(() => {
    console.log(this);
}, 1000);

// for(let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);、
// }

/*
output:

Timeout {
  _called: true,
  _idleTimeout: 1000,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 145,
  _onTimeout: [Function],
  _timerArgs: undefined,
  _repeat: null }
{}
 */

(function (g) {
    var ns = 'myNamespace';
})(global);

+(function (g) {
    var ns = 'myNamespace';
})(global);