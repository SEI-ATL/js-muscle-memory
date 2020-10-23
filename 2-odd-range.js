/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    let results = [];
    if(end < 0){
        return results; // [ ]
    } else {
        for (let i = 1; i <= end; i++) {
            if (i % 2 === 0) {
                continue;
                // want to do nothing if even
            } else {
                results.push(i)
            }

    }

    }
    return results;
}

console.log(oddRange(1000000))
// takes a number
// takes all odd number up to that number given
// adds them to an array
// edge cases: if given a negative, I do nothing with that number
// set up a for loop and start the loop at 1
// iterate to check if each number has a reminder of zero
    // ** We can also iterate by skipping over number (ie even numbers)
