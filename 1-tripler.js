/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

// understand the problem
// what the problem is asking me to return
// what do i need to solve the problem

function tripler(array) {
    const result = [];

    //return a new array
    // iterate through the passed in array
    console.log('Inside of tripler function');
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let multiple = num * 3;
        result.push(multiple);
    }
    // multiply each element by 3
    // push new element into result
    // return result

    return result;
}
console.log(tripler([1,2,3]));
console.log(tripler([4, 1, 7]));

