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

- <a name="os-"></a>OS 

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```

- <a name=""></a>

```javascript

```
