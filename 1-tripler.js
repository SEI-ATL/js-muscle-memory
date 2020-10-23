/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    // Confirm in the function
    console.log('Inside the tripler() function:');
    // Take in an array, and return a new array
    const result = [];
    // Iterate through array passed in
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
    // Multiply each element by 3
        let multiple = num * 3;
    // Push that element into my result.
        result.push(multiple);
    }
    // Return result
    return result
}

console.log(tripler([1,2,3]));
console.log(tripler([4, 1, 7]));