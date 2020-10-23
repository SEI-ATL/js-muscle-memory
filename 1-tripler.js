/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let multiple = num * 3;
        result.push(multiple);

    }
    return result;

        // return a new array
        // interate through the array passed in
        // multiply each element by 3
        // push that element into my result
        // return result x
  
}
console.log(tripler([1,2,3]))
// understand the problem
// what the problem is asking you to return
// what do I need to solve the problem
// 

// what am I returning? array
