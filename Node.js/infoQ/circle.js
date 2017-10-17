/*
 * https://github.com/thu/front-end
 *
 * Copyright mingfei.net@gmail.com
 * Released under the MIT license
 *
 * Date: 2017/10/17 16:37
 */

const PI = Math.PI;

exports.getArea = (radius) => {
    return PI * radius * radius;
};

exports.getPerimeter = (radius) => {
    return PI * radius * 2;
};