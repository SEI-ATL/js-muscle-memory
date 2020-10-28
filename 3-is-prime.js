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

// function isPrime(number) {

// }

// if number is 1 = > not a prime
// if number is 2 = > prime
// otherwise
// loop through all numbers up until itself to see if there are any positive divisors
// if positive divisors exist and dividing = 0 , return false
// else the only postiive divisors are 1 and itself, return true
const isPrime = (number) => {
    if (number===1){
        return false;
    } else if (number===2) {
        return true;
    } else {
        for (let i=2; i<number; i++) {
            if (number % i ===0) {
                return false;
            }
        }
    return true;
    }

}

console.log(isPrime(11));
