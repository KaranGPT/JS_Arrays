const each = require('./each'); 

const items = [1, 2, 3, 4, 5, 5]; 


function logItem(element, index) {
    console.log('Element:', element, 'Index:', index);
}


each(items, logItem);
