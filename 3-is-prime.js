/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

//  UNDERSTAND THE PROBLEM
//  WHATS IS THE PROBLEM ASKING YOU TO RETURN
//  WHAT DO I NEED TO SOLVE THIS PROBLEM
//  WHAT AM I RETURNING? ARRAY



function isPrime(number) {
    //start at 2 and check to see if the number is divisible
    //if divisible by any number other then 1, then return false
    //other wise return true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
