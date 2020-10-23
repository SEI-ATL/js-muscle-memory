/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

let array = [1, 2, 3, 4]
function tripler(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let multiple = num * 3;
        result.push(multiple);

        // put back into results
    };
    // return a new array
    // iterate through the array passed in
    // multiply each element by 3
    // push that element into my result
    // return result


    return result;
}
console.log(tripler(array))
// understand the problem
// what the problem is asking you to return
// what do I need to solve this problem

// what am I returning ? array
