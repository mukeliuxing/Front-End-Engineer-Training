var c = require('./circle');

var radius = 1.2;
console.time('test');
console.log(c.getArea(radius));
console.log(c.getPerimeter(radius));
console.timeEnd('test');