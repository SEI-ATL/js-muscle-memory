/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const result = [0 * array.length]; //create new array
    for (i = 0; i < array.length; i++) {
        //multiply by 3 and store each element to new array
        result[i] = array[i] * 3;
    }
    return result //return
}

console.log(tripler([1, 2, 3]), [3, 6, 9]);
console.log(tripler([-1, -2, -3]), [-3, -6, -9]);
console.log(tripler([3, -2, 18]), [9, -6, 54]);
console.log(tripler([1.3, -2, 400]), [3.9, -6, 1200]); //weird float errors w/o rounding but rounding in js is complicated, cannot specify decimal palces w/o making it a string