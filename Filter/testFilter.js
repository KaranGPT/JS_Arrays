const filter = require('./filter'); 

const items = [1, 2, 3, 4, 5, 5]; 


function isGreaterThanThree(element) {
    return element > 3;
}


const filteredItems = filter(items, isGreaterThanThree);
console.log(filteredItems); 
