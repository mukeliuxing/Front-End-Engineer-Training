/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/29 13:27
 */

var util = require('util');

function Sup() {
    this.name = 'sup';
    this.dob = '1999';
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}

Sup.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Sup);//

let obj1 = new Sup();
obj1.showName();
obj1.sayHello();
console.log(obj1);
console.log('----------');
let obj2 = new Sub();
obj2.showName();
// obj2.sayHello();
console.log(obj2);

// 我们定义了一个基础对象Base 和一个继承自Base 的Sub，Base 有三个在构造函数 内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承。
// Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 dob 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。