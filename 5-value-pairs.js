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

function valuePair(obj1, obj2, key) {
    //create array
    const keyPairs = [];
    //append value from obj1
    keyPairs.push(obj1[key]);
    //append from obj2
    keyPairs.push(obj2[key]);
    //deal with key not in obj
    if (keyPairs[0] == undefined) {
        keyPairs.shift(keyPairs[1]);
    } else if (keyPairs[1] == undefined) {
        keyPairs.pop();
    }
    return keyPairs;
}

const object1 = { name: 'One', location: 'Remote', age: 1 };
const object2 = { name: 'Two', location: 'San Francisco' };

console.log(valuePair(object1, object2, 'location')); // => [ 'Remote', 'San Francisco' ]
console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]
console.log(valuePair(object1, object2, 'age')); // => [1]