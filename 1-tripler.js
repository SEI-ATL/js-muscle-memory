/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
let testArray = [5, 19,18, -22];
let newArray=[];
function tripler(array) {
    for( let i = 0; i < array.length; i++){
        let newVar = array[i] * 3;
        newArray.push(newVar);
    }
  
    return newArray;
}
console.log(tripler(testArray));