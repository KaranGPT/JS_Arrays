const find = require('./find'); 

const items = [1, 2, 3, 4, 5, 5];


function isGreaterThanThree(element) {
    return element > 3;
}


const foundItem = find(items, isGreaterThanThree);
console.log(foundItem); 
