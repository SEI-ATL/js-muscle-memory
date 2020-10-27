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

function isPrime(number) {
// start at 2 and check to see if the number is divisible.
// IF divisible by any number other than 1 then return false.
// if else, return true.

for (let i = 2; i <= number; i++) {
    if (number % i === 0) {  
        return false;
    }
}
}

