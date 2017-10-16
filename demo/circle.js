const PI = 3.14;

function getArea(radius) {
    return PI*radius*radius;
}

function getPerimeter(radius) {
    return PI*radius*2
}

exports.getArea = getArea;
exports.getPerimeter = getPerimeter;