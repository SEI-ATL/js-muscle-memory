/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    const result = [];
    if (end < 0) {
        return result
    } else {
        for (let i = 1; 1 <= end; i +=2) {
            result.push(i);
        }
        // for (let i = 1; i <= end; i++) {
        //     if (i % 2 !== 0) {
        //         continue;
        //     } else {
        //         result.push(i);
        //     }

        // }
               
    }
    // return an array

}

//take in a number
//return an array of all pos. numbers up to the number (range)