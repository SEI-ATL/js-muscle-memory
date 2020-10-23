/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    const result = [];
    //return an array
    //edge casees: if given a negative numebr do nothing with that number 
    if (end < 0) {
        return result; 
    } else{
        for (let i = 1; i <= end; i++) {
            if (i % 2 === 0) {
                continue
            }else{
                result.push(i);
            }
        }
    }
       // for(let i = 1; i= end; i+=)

    console.log
    console.log
    console.log




    // set up a for loop and start the loop at 1 
    //iterate to check if each number has a remainder of 0
    // we can also iterate by skipping over numbers
    
    return result;
}