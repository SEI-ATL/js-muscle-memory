/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

//  UNDERSTAND THE PROBLEM
//  WHATS IS THE PROBLEM ASKING YOU TO RETURN
//  WHAT DO I NEED TO SOLVE THIS PROBLEM
//  WHAT AM I RETURNING? ARRAY

//return a new array DONE
//iterate through the array passed in DONE
//multiply each element by 3 DONE
//push that element into my result DONE
//return result DONE

function tripler(array) {
    const result = [];
    console.log('Inside os tripler function')
    for (let i = 0 ; i < array.length; i++) {
        let num = array[i];
        let multiple = num * 3;
        result.push(multiple);
    }
    return result;
}
console.log(tripler([1,2,3]))
console.log(tripler([4,1,7]))
