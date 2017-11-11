# Node.js demo source codes

- <a name="fs-console-object"></a> FS Console Object

```javascript
const fs = require('fs');
const Console = console.Console; // method 1

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const logger = new Console(out, err);

logger.log('log');
logger.error('err');
```

- <a name="global-console-object"></a> Global Console Object

```javascript
const Console = require('console').Console; // method2
global.console = new Console(process.stdout, process.stderr);

global.console.log('log...');
global.console.error('error...')
```

- <a name="os-eol"></a> OS EOL 

```javascript
const os = require('os');
console.log(os.EOL.length);
```

- <a name="os-tmpdir"></a> OS tmpDir()

```javascript
const os = require('os');
console.log(os.tmpDir());
```

- <a name="os-hostname"></a> OS hostname()

```javascript
const os = require('os');
console.log(os.hostname());
```

- <a name="os-platform"></a> OS platform()

```javascript
const os = require('os');
console.log(os.platform());
```

- <a name="os-uptime"></a> OS uptime()

```javascript
const os = require('os');
console.log(os.uptime());
```

- <a name="os-totalmem"></a> OS totalmem()

```javascript
const os = require('os');
console.log(os.totalmem());
```

- <a name="os-freemem"></a> OS freemem()

```javascript
const os = require('os');
console.log(os.freemem());
```

- <a name="os-cups"></a> OS cpus()

```javascript
const os = require('os');
console.log(os.cpus());
```

- <a name="os-networkinterfaces"></a> OS networkInterfaces()

```javascript
const os = require('os');
console.log(os.networkInterfaces());
```

- <a name="os-arch"></a> OS arch()

```javascript
const os = require('os');
console.log(os.arch());
console.log(process.arch);
```

- <a name="os-constants-signals"></a> OS Constants signals

```javascript
const os = require('os');
console.log(os.constants.signals.SIGINT);
```

- <a name="os-constants-errno"></a> OS Constants errno

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

- <a name="buffer-from-array"></a> Buffer from() with array

```javascript
const buf = Buffer.from([0x68, 0x65, 0x6c]);
console.log(buf);
```

- <a name="buffer-from-array-buffer"></a> Buffer from() with array buffer

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

- <a name="buffer-from-buffer"></a> Buffer from() with buffer

```javascript
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61;

console.log(buf1.toString());
console.log(buf2.toString());
```

- <a name="buffer-from-string"></a> Buffer from() with string

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

- <a name="fs-create-write-stream"></a> FS createWriteStream 

```javascript
const fs = require('fs');

let writer = fs.createWriteStream('./test_file');

writer.write('data...');

writer.end('end...');

writer.on('finish', () => {
    console.log('finish...');
});
```

- <a name="fs-pipe"></a> FS pipe 

```javascript
const fs = require('fs');

let reader = fs.createReadStream('http://bing.com');
let writer = fs.createWriteStream('./test_file');

reader.pipe(writer);

reader.on('end', () => {
    console.log('copy finish.');
});
```

- <a name="http-create-server"></a> HTTP createServer()  

```javascript
const http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    res.writeHead(200, 'OK', {'Content-type':'text/html;charset=UTF-8'})
    res.write('test...');
    res.write('测试...');
});

server.listen(80);

server.on('error', (error) => {
    console.log(error);
});
```

- <a name="http-request"></a> HTTP  request()

```javascript
const http = require('http');

let ip = '59.66.23.56';

let request = http.request({
    host: 'ip.taobao.com',
    path: '/service/getIpInfo.php?ip=' + ip
}, (res) => {
    res.on('data', (buf) => {
        console.log(JSON.parse(buf.toString()));
    })
});

request.end();
```

- <a name="https-request"></a> HTTPS  request()

```javascript
const https = require('https');
const fs = require('fs');

let request = https.request({
    hostname: 'nodejs.org',
    protocol: 'https:',
    path: '/static/images/logo.svg'
});

request.on('response', (res) => {
    console.log('status: ' + res.statusCode);
    // console.log(res.headers);
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        fs.writeFile('./test.svg', data, 'binary', (err) => {
            if (err) throw err;
            console.log('downloaded.');
        });
    });
});

request.end();
```

- <a name="mysql-import-data"></a> MySQL import data

```javascript
const cp = require('child_process');
cp.exec('path-to-mysql-bin/mysql -uroot -psystem < path-to-sql-file/scott.sql', (error, stdout, stderr) => {
    if (error) throw error;
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
```

- <a name="mysql-connections"></a> MySQL connections

```javascript
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'system',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log('error: ' + err.stack);
        return;
    } else {
        console.log('connected as id: ' + connection.threadId);
    }
});

/*
connection.query('select * from scott.emp', (err, results, fields) => {
    if(err) throw err;
    console.log(results);
    console.log(fields);
});
*/
```

- <a name="mysql-pooling"></a> MySQL pooling

```javascript
const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'system',
    database: 'scott'
});

pool.query('select 1+1 AS solution', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
    console.log(fields);
});

/*
pool.getConnection((error, connection) => {
    connection.query('select 1+1 AS solution', (error, result, fields) => {
        connection.release();
        if (error) throw error;
    });
});
*/
```

- <a name="mysql-insert"></a> MySQL insert

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.query('insert into scott.test values(null, ?, ?)', ['Scott', 'tiger'], (error, results, fields) => {
    if (error) throw error;
    console.log(results.insertId);
});
```

- <a name="mysql-multiple-statements"></a> MySQL multiple statement

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system',
    multipleStatements: true
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('select 1; select 2', (error, results, fields) => {
        if (error) throw error;
        console.log(results[0]);
        console.log(results[1]);
    });
});

```

- <a name="mysql-update"></a> MySQL update

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('update scott.test set username=? where id=?', ['Jerry', 1], (error, results, fields) => {
        if (error) throw error;
        console.log(results.affectedRows);
    });
});
```

- <a name="mysql-delete"></a> MySQL delete

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('delete from scott.test where id=?', ['4'], (error, results, fields) => {
        if (error) throw error;
        console.log(results.affectedRows);
    });
});
```

- <a name="mysql-limit"></a> MySQL limit

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('SELECT * FROM scott.emp LIMIT ? OFFSET ?', [3, 1], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });
});
```

- <a name="mysql-where"></a> MySQL where

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('select * from scott.emp where job=?', ['president'], (error, results, fields) => {
        console.log(results);
    })
});
```

- <a name="mysql-order-by"></a> MySQL order by

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('select ename, deptno from scott.emp order by deptno', (error, results, fields) => {
        console.log(results);
    });
});
```

- <a name="mysql-limit"></a> MySQL limit

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if (error) throw error;
    connection.query('SELECT * FROM scott.emp LIMIT ? OFFSET ?', [3, 1], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });
});

```

- <a name="mysql-affected-rows"></a> MySQL affected rows

```javascript
const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: 'system'
});

connection.connect((error) => {
    if(error) throw error;
    console.log('connected...');
    let sql = 'INSERT INTO scott.test(username, password) VALUES ?';
    let values = [
        ['user1', 'pass1'],
        ['user2', 'pass2'],
        ['user3', 'pass3']
    ];
    connection.query(sql, [values], (error, results, fields) => {
        if (error) throw error;
        console.log(results.insertId);
        console.log(results.affectedRows);
    });
});

```

- <a name="mysql-"></a> MySQL

```javascript

```

- <a name="mysql-"></a> MySQL

```javascript

```

- <a name="mysql-"></a> MySQL

```javascript

```

- <a name="mysql-"></a> MySQL

```javascript

```

- <a name="mysql-"></a> MySQL

```javascript

```
