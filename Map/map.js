function map(elements, cb) {
    let result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(cb(elements[i], i));
    }
    return result;
}
module.exports = map;
