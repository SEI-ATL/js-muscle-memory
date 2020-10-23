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
    // Iterate through all numbers up to the given number to see if the number is divisible by that value
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        // Don't need an else statement, especially because need to continue looping.
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(15));
console.log(isPrime(121));
console.log(isPrime(18));

