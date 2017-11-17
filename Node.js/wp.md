1. npm init
2. npm i webpack --save-dev
3. app/hello.js
```
module.exports = function () {
    var hello= document.createElement('div');
    hello.textContent = 'Hello, Webpack!';
    return hello;
};
```
4. app/main.js
```
const hello = require('./hello');
document.querySelector('#root').appendChild(hello());
```
5. public/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="root"></div>
<script src="bundle.js"></script>
</body>
</html>
```
6. cmd: [node_module/.bin/]webpack app/main.js public/bundle.js
7. index.html > Hello, Webpack!
---------------------
8. webpack.config.js
```
module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
```
9. cmd: [node_module/.bin/]webpack
10. package.json
```
"scripts": {
"start": "webpack"
}
```
11. npm [run] start
---------------------
12. npm install webpack-dev-server --save-dev
13. webpack.config.js
```
devServer: {
	contentBase: "./public",
	historyApiFallback: true,
	inline: true
} 
```
14. package.json
```
"scripts": {
    "start": "webpack",
    "server": "webpack-dev-server --open"
}
```
15. cmd: npm run server
---------------------
16. app/config.json
```
{
  "helloText": "Hello, Webpack from JSON!"
}
```
17. app/hello.js
```
var config = require('./config.json');

module.exports = function() {
  var hello = document.createElement('div');
  hello.textContent = config.helloText;
  return hello;
};
---------------------
```
18. cmd: npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
19. webpack.config.js
```
module: {
	rules: [
		{
			test: /(\.jsx|\.js)$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"es2015", "react"
					]
				}
			},
			exclude: /node_modules/
		}
	]
}
```
20. cmd: npm install --save react react-dom
21. app/hello.js
```
import React, {Component} from 'react'
import config from './config.json';

class hello extends Component{
  render() {
    return (
      <div>
        {config.helloText}
      </div>
    );
  }
}

export default hello
```
22. app/main.js
```
import React from 'react';
import {render} from 'react-dom';
import hello from './hello';

render(<hello />, document.getElementById('root'));
```
23. cmd: npm [run] start
24. cmd: npm run server
---------------------
25. cmd: npm install style-loader css-loader --save-dev
26. webpack.config.js
```
module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}
			]
		}
	]
}
```
27. app/style.css
```
body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```
28. app/main.js
```
import React from 'react';
import {render} from 'react-dom';
import hello from './hello';

import './style.css';

render(<hello />, document.getElementById('root'));
```
