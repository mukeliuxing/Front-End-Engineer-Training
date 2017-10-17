# Node.js

> By `Ryan Dahl`
> Since 2009
> C++ 编写 `Chrome V8引擎`
> Javascript 的运行环境 `UNIX-like Window`

1.  特性
	- 事件驱动
		- 注册回调函数
	- 异步编程
		- 非阻塞，充分利用系统资源
		- 适用于处理并发请求
	- 单进程 / 单线程
		 - 多核下，可采用多进程机制

```javascript
const http = require('http');

http.createServer((req, res) => { // JavaScript 匿名回调函数
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Node.js!\n');
}).listen(80, '127.0.0.1');
```
2. 安装
	- Windows
		- [https://nodejs.org/en/](https://nodejs.org/en/)
		- LTS Vs. Current
		- https://nodejs.org/dist/v6.11.4/node-v6.11.4-x64.msi
		- 自动加入环境变量
	- Others
	
```
node -v
``` 
3. NPM
> Node Package Manager
- 安装第三方库
- `npm install <module_name>`
- `npm uninstall <module-name>`
	
4. Node.js 模块

- 定义模块

```javascript
const PI = Math.PI;

exports.getArea = (radius) => {
    return PI * radius * radius;
};

exports.getPerimeter = (radius) => {
    return PI * radius * 2;
};
```

- 使用模块

```javascript
const c = require('./circle');

console.log(c.getArea(1.2));
console.log(c.getPerimeter(1.2));
```

- 模块的分类
	- 原生模块
	- 文件模块
		- .js 通过 fs 模块同步读取 js 文件并编译执行
		- .node
		- .json
	- 模块加载顺序
 
```javascript
// 对 js 文件的包装
(function (exports, require, module, __filename, __dirname) {
	// ...
});
```		

5. 事件机制

6. 异步 I/O
7. 	
2.  网络模块
	- HTTP
	- HTTPS
	- DNS
	- NET
	- UDP
	- TLS
	- 