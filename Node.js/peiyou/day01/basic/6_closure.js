function outer() {
    var num = 10;

    function inner() {
        console.log(num);
    }

    return inner;
}

var outer1 = outer();
var outer2 = outer();

console.log(outer1);
console.log(outer2);

/*
[Function: inner1]
[Function: inner2]
 */

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

