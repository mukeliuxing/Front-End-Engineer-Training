/*
 * https://github.com/thu/Front-End-Engineer-Training
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/30 15:24
 */

const fs = require('fs');
fs.lstat(__filename, (err, stat) => {
    console.log(stat);
});
console.log(__filename);

/*
Stats {
  dev: 610903103,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 1970324837039380,
  size: 318,
  blocks: undefined,
  atime: 2017-11-02T08:43:30.961Z,
  mtime: 2017-11-02T08:43:30.968Z,
  ctime: 2017-11-02T08:43:30.986Z,
  birthtime: 2017-10-30T07:24:02.126Z }
 */
