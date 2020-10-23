/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

//  UNDERSTAND THE PROBLEM
//  WHATS IS THE PROBLEM ASKING YOU TO RETURN
//  WHAT DO I NEED TO SOLVE THIS PROBLEM
//  WHAT AM I RETURNING? ARRAY

//return a new array
//iterate through the array passed in 
//multiply each element by 3
//push that element into my result
//return result

function oddRange(end) {
    const result = [];
    //edge cases: if given an negative number i do nothing with that number
    if (end < 0) {
        return result; // []
    } else {
        for (let i = 1; i <= end; i++) {
            if (i % 2 !== 0) {
                result.push(i);
            }
        }
    }
    //set up a for loop and start the loop at 1
    //iterate to check if each number has a raminder of zero
        //* we can also iterate by skipping over numbers i++ becomes i+=2
    return result;
}

console.log(oddRange(13));
console.log(oddRange(6));
console.log(oddRange(-1));

