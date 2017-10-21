1. ryan dahl

> [https://github.com/ry](https://github.com/ry)
> V8 C++

2. Node.js Arch

> [https://segmentfault.com/a/1190000005892501](https://segmentfault.com/a/1190000005892501)

> 把 Node.js 应用程序想象成一家星巴克，一个训练有素的前台服务生（唯一的主线程）在柜台前接受订单。当很多顾客同时光临的时候，他们排队（进入事件队列）等候接待；每当服务生接待一位顾客，服务生会把订单告知给经理（libuv），经理安排相应的专职人员去烹制咖啡（工作线程或者系统特性）。这个专职人员会使用不同的原料和咖啡机（底层 C/C++ 组件）按订单要求制作咖啡或甜点，通常会有四个这样的专职人员保持在岗待命（线程池），高峰期的时候也可以安排更多（不过需要在一早就安排人员来上班，而不能中午临时通知）。服务生把订单转交给经理之后不需要等着咖啡制作完成，而是直接开始接待下一位顾客（事件循环放进调用堆栈的另一个事件），你可以把当前调用堆栈里的事件看成是站在柜台前正在接受服务的顾客。

> 当咖啡完成时，会被发送到顾客队列的最后位置，等它移动到柜台前服务生会叫相应顾客的名字，顾客就来取走咖啡（最后这部分在真实生活中听起来有点怪，不过你从程序执行的角度理解就比较合乎情理了）。

3. libuv

> [http://luohaha.github.io/Chinese-uvbook/source/basics_of_libuv.html](http://luohaha.github.io/Chinese-uvbook/source/basics_of_libuv.html)

> [http://v2in.com/libuv-uv-means.html](http://v2in.com/libuv-uv-means.html)

4. REPL

> [https://zh.wikipedia.org/wiki/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF](https://zh.wikipedia.org/wiki/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF)

