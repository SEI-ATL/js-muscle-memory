/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    //check end is positive
    if (end <= 0) {
        return 'please enter a positive number'
    }
    //create array
    const oddArray = [];
    //create counter
    let i = 1;
    //loop while less than or equal to end and add odd numbers to array
    for (i = 1; i <= end; i += 2) {
        oddArray.push(i);
    }
    return oddArray;
}

console.log(oddRange(16), [1, 3, 5, 7, 9, 11, 13, 15]);
console.log(oddRange(15), [1, 3, 5, 7, 9, 11, 13, 15]);
console.log(oddRange(-15), 'please enter a positive number');