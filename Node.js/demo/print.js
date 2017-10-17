var m = require('./m1')
var mp = m.print;

console.log(mp(1));

const fs = require('fs');

var file = fs.readFileSync('d:/test.txt');
console.log(file.toString());