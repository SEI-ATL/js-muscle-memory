/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    const result = [];
    // return an array
    // edge case: if a given number, i do nothing with that number
    // set a for loop and start the loop at 1
    //iterate to check if each number has a remainder of zero
        // we can also iterate by skipping over numbers (ie even number)
    if (end < 0) {
        return result;
    } else {
        for (let i = 1; i <= end; i += 2);
        result.push(i);
    }
    






    return result;
}

console.log(oddRange(0));