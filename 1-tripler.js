/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const result = [];
    // return a new array
    // iterate array that is passed in
    // multiply each element by 3
    // push new element into result array
    // return rresult x
    console.log ('Inside of this function')
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let multi = num *3;
        result.push(multi);   
    }

    
  console.log(tripler([1,2,3]));
}