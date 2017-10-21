/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/18 17:18
 */

class Human {
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(`name: ${this.name}`);
    }
}

let tom = new Human('Tom');
tom.printName();

class Chinese extends Human{
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let zhangsan = new Chinese('Zhangsan' ,18);
zhangsan.printName();

// console.warn(process);

require('http').createServer();
