# Node.js demo source codes

- <a name="fs-console-object"></a>FS Console Object

```javascript
const fs = require('fs');
const Console = console.Console; // method 1

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const logger = new Console(out, err);

logger.log('log');
logger.error('err');
```

- <a name="global-console-object"></a>Global Console Object

```javascript
const Console = require('console').Console; // method2
global.console = new Console(process.stdout, process.stderr);

global.console.log('log...');
global.console.error('error...')
```

- <a name="os-eol"></a>OS EOL 

```javascript
const os = require('os');
console.log(os.EOL.length);
```

- <a name="os-tmpdir"></a>OS tmpDir()

```javascript
const os = require('os');
console.log(os.tmpDir());
```

- <a name="os-hostname"></a>OS hostname()

```javascript
const os = require('os');
console.log(os.hostname());
```

- <a name="os-platform"></a>OS platform()

```javascript
const os = require('os');
console.log(os.platform());
```

- <a name="os-uptime"></a>OS uptime()

```javascript
const os = require('os');
console.log(os.uptime());
```

- <a name="os-totalmem"></a>OS totalmem()

```javascript
const os = require('os');
console.log(os.totalmem());
```

- <a name="os-freemem"></a>OS freemem()

```javascript
const os = require('os');
console.log(os.freemem());
```

- <a name="os-cups"></a>OS cpus()

```javascript
const os = require('os');
console.log(os.cpus());
```

- <a name="os-networkinterfaces"></a>OS networkInterfaces()

```javascript
const os = require('os');
console.log(os.networkInterfaces());
```

- <a name="os-arch"></a>OS arch()

```javascript
const os = require('os');
console.log(os.arch());
console.log(process.arch);
```

- <a name="os-constants-signals"></a>OS Constants signals

```javascript
const os = require('os');
console.log(os.constants.signals.SIGINT);
```

- <a name="os-constants-errno"></a>OS Constants errno

```javascript
const os = require('os');
console.log(os.constants.errno.EADDRINUSE);
```
