var name = 'tom';
// console.log(name);

function test() {
    var s = '';
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j <= i; j++) {
            s += `${i}*${j}=${i * j} `;
        }
        s += '\r\n'
    }
    console.log(s);
}

exports.name = name;
exports.test = test;