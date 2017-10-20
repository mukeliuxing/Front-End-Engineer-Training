/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/20 9:54
 */

/*
* console.time(label);
* console.timeEnd(label);
* */
console.time('for loop');
for(let i = 0; i < 100; i++) {
  i++;
}
console.timeEnd('for loop');