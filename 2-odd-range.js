/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    // return array
    const result = [];
    // edge case: if given a negative number, do nothing with that number
    if (end < 0) {
        return result; // [] empty array
    } else {
        for (let i = 1; i <= end; i++) {
            if (i % 2 !== 0) {
                //console.log(i);
                result.push(i);
            } 
        } 
        /* for (let i = 1; i <= end; i += 2) {
            result.push(i);
        } */
    }
     // set up a for loop and start the loop at 1
    // iterate through to check if each number has a remainder of 0
        // we can also iterate by skipping over numbers (i.e. even numbers)

    return result;

}

console.log(oddRange(18));
console.log(oddRange(24));