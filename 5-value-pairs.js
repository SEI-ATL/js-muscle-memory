/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

// function valuePair(obj1, obj2, key) {

// }


// example objects
const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};


// init new array
// push value of element with corresponding key in obejct to arr
// return arr
valuePair = (obj1, obj2, key) => {
    let arr = [];
    arr.push(obj1[key]);
    arr.push(obj2[key]);
    return arr;

}

console.log(valuePair(object1, object2, 'name'));