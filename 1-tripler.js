/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

// function tripler(array) {

// }

// create tripler function
// create function that triples a given input number x
// use map with mulByThree function to multiple each ele in array by 3
tripler = (array) => {

    // mulByThree = (x) =>{
    //     return x*3;
    // }

    // return array.map(mulByThree);

    return array.map(x => x*3);

}

console.log(tripler ([1,2,3]));