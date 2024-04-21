function filter(elements, cb) {
    let filteredResults = [];
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i])) {
            filteredResults.push(elements[i]);
        }
    }
    return filteredResults;
}
module.exports = filter; 
