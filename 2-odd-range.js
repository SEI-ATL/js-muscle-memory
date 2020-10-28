/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

// function oddRange(end) {

// }

//create function named oddRange
// initalize with an empty list
// create for loop
// start at 1 (first odd #)
// end at end
// step = 2
// push i into new array
const oddRange = (end) => {
    let arr = [];
    for (let i=1; i<=end; i+=2){
        arr.push(i);
    }
    return arr;

}

console.log(oddRange(13));