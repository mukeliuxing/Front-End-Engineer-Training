# Node.js demo source codes

1. Console

- <a name="console-object"></a>Console object

```javascript
const fs = require('fs');
const out = fs.createReadStream('./out.log');
const err = fs.createReadStream('./err.log');

const logger = new console.Console(out, err);

logger.log('log...');
logger.error('error...');
```

<div style="height:2000px;">temp...</div>