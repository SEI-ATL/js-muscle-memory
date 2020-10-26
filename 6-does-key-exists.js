/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}
doesKeyExist(obj1, 'company'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

// function doesKeyExist(obj, key) {

// }



const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}


// check if key in object, if not it returns false, if its in it returns true
const doesKeyExist = (obj, key) => {
    return key in obj;


}

console.log (doesKeyExist(obj1, 'name'));
console.log (doesKeyExist(obj1, 'company'));
