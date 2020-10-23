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
    // start at 2 and check to see if the number is divisible
    // if divisible by any number other than 1, then return false
    // otherwise, we should return true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) { // 10 % 2 = 0
            return false
        }
    }
    return true;
}
console.log(isPrime(2))
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
// return a true or false statement depending on if the number is prime or not
// use if loop to determine if it's prime
// figure out what formula i need to determine if a number is prime or not