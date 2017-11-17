### mocha

1. npm i -g mocha
2. npm i --save-dev mocha
3. npm i --save-dev chai
4. add.js
5. add.add.test.js
 - describe: test suite
 - it: test case
 - assert: chai
   - expect().to.be.equal();
   - to.be.not.equal()
   - to.be.a()
   - to.include()
   - to.contain()
   - to.be.empty()
6. cmd: mocha add.test.js
7. mkdir: test
8. mocha
9. mocha --reporter spec
10 mocha --reporter tap
11. mocha --reporters
12. npm i --save-dev mochawesome
13. mocha --reporter mochawesome 
