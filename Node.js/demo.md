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

- <a name="buffer-alloc"></a> Buffer alloc()

```javascript
const buf = Buffer.alloc(1024);
console.log(buf);
```

- <a name="buffer-alloc-unsafe"></a> Buffer allocUnsafe()

```javascript
const buf = Buffer.allocUnsafe(64);
console.log(buf);
```

- <a name="buffer-from-array"></a> Buffer from(): array

```javascript
const buf = Buffer.from([0x68, 0x65, 0x6c]);
console.log(buf);
```

- <a name="buffer-from-array-buffer"></a> Buffer from(): array buffer

```javascript
const arr = new Uint16Array(2);

arr[0] = 65534;
arr[1] = 65535;

console.log(arr[0]);
console.log(arr[1]);

const buf = Buffer.from(arr.buffer);
console.log(buf);

arr[0] = 65535;
console.log(buf);
```

- <a name="buffer-from-buffer"></a> Buffer from(): buffer

```javascript
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61;

console.log(buf1.toString());
console.log(buf2.toString());
```

- <a name="buffer-from-string"></a> Buffer from(): string

```javascript
const buf = Buffer.from('一', 'utf8');
console.log(buf);
```

- <a name="buffer-iteration-length"></a> Buffer iteration by length

```javascript
const buff = Buffer.from([1, 2, 3]);

for (let i = 0; i < buff.length; i++) {
    console.log(buff[i]);
}
```

- <a name="buffer-iteration-keys"></a> Buffer iteration by keys()

```javascript
const buf = Buffer.from([1, 2, 3]);

for (let key of buf.keys()) {
    console.log(`key: ${key}, value: ${buf[key]}`);
}
```

- <a name="buffer-iteration-values"></a> Buffer iteration by values()

```javascript
const buf = Buffer.from([1, 2, 3]); // Buffer.allocUnsafe(16);

for (let value of buf.values()) {
    console.log(value);
}
```

- <a name="buffer-iteration-entries"></a> Buffer iteration by entries()

```javascript
const buf = Buffer.from([1, 2, 3]); // Buffer.allocUnsafe(16);

for (let pair of buf.entries()) {
    console.log(pair);
}    
```

- <a name="buffer-character-encodings"></a> Buffer character encodings 

```javascript
const buf = Buffer.from('Hello, Node.js!');

console.log(buf.toString('utf8'));
console.log(buf.toString('ascii'));
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('binary'));
console.log(buf.toString('latin1'));
```

- <a name="buffer-typed-array"></a> Buffer typed array 

```javascript
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf1 = Buffer.from(arr);
const buf2 = Buffer.from(arr.buffer);

console.log(buf1);
console.log(buf2);
```

- <a name="fs-stat"></a> FS stat

```javascript
const fs = require('fs');
fs.lstat(__filename, (err, stat) => {
    console.log(stat);
});
console.log(__filename);
```

- <a name="fs-read-dir"></a> FS readdir

```javascript
const fs = require('fs');
fs.readdir(__dirname, (err, files) => {
    console.log(files);
});
```

- <a name="fs-mk-dir"></a> FS mkdir

```javascript
const fs = require('fs');
fs.mkdir(__dirname + '/test', (err) => {
    console.log(err);
});
```

- <a name="fs-read-file"></a> FS readFile 

```javascript
const fs = require('fs');

try {
    fs.readFile(__filename, (err, data) => {
        // if(err) throw err;
        // test error
        console.log(data.toString());
    });
} catch (err) {
    console.log(err);
}

console.log('end');

process.on('uncaughtException', (err) => {
    console.log(err);
});
```

- <a name="fs-write-file"></a> FS writeFile 

```javascript
const fs = require('fs');

fs.writeFile(__dirname + '/some_file', 'data...', (error) => {
    console.log(error);
});
```

- <a name="fs-append-file"></a> FS appendFile 

```javascript
const fs = require('fs');

fs.appendFile(__dirname + '/some_file', 'another data...', (error) => {
    console.log(error);
});
```

- <a name="fs-read"></a> FS read 

```javascript
const fs = require('fs');

fs.open(__dirname + '/some_file', 'r', (err, fd) => {
    if (err) throw err;
    let buffer = Buffer.alloc(2);
    fs.read(fd, buffer, 0, 2, 0, (err, bytesRead, buffer) => {
        if (err) throw err;
        console.log(bytesRead);
        console.log(buffer.toString());
        fs.close();
    });
});

process.on('uncaughtException', (err) => {
    console.log(err);
});
```

- <a name="fs-write"></a> FS write 

```javascript
const fs = require('fs');

fs.open(__dirname + '/some_file', 'w', (err, fd) => {
    if (err) throw err;
    const buffer = Buffer.from('hello');
    fs.write(fd, buffer, 0, (err, written, buffer) => {
        if (err) throw err;
        console.log(written);
        console.log(buffer.toString());
        fs.close();
    });
});

process.on('uncaughtException', (err) => {
    console.log(err);
});
```

- <a name="fs-create-read-stream"></a> FS createReadStream

```javascript
const fs = require('fs');

let reader = fs.createReadStream(__filename);

reader.on('data', (chunk) => {
    console.log(chunk.toString());
});

reader.on('end', () => {
    console.log('end...');
});

console.log('game over...');
```

- <a name="fs-"></a> FS 

```javascript

```

- <a name="fs-"></a> FS 

```javascript

```

- <a name="fs-"></a> FS 

```javascript

```
