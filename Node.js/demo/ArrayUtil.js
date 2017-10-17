function sum(arr) {
    var sum = 0;
    for (var v in arr) {
        sum += arr[v];
    }
    return sum;
}

function avg(arr) {
    return sum(arr) / arr.length;
}

exports.sum = sum;
exports.avg = avg;