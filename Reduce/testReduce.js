const reduce = require('./reduce'); 

const items = [1, 2, 3, 4, 5, 5]; 


function sum(total, element) {
    return total + element;
}


const totalSum = reduce(items, sum);
console.log(totalSum); 


const totalSumWithStartingValue = reduce(items, sum, 10);
console.log(totalSumWithStartingValue); 
