var buff = new Buffer(10);
console.log(buff);
console.log(buff.length);

var buff1 = Buffer.from([1, 2, 3]);
console.log(buff1);

var buff2 = Buffer.alloc(100);
console.log(buff2);