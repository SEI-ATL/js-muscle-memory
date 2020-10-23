/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    // Confirm in the function
    console.log('Inside the oddRange() function:')
    // Create new array
    let result = [];
    // Must only accept positive numbers
    if (end > 0) {
        // Iterate through numbers from 1 to end, but only including odds (add by 2 each time)
        for (let i = 1; i <= end; i += 2) {
            // Add numbers to new array
            result.push(i);
        }        
    // Handle edge case of negative numbers or non-numerical input
    } else {
        // End loop by just returning the result, unchanged
        return result;
    }
    // Return new array
    return result;
}

console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]
console.log(oddRange(-16));
console.log(oddRange('apple'));