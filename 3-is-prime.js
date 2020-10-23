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
    //edge cases: deny negative, even, one, and zero
    //edge case: accept 2
    /* Don't need this b/c it says assume positive integer 
    if (number <= 1) {
        return false;
    } */
    if (number === 2) {
        return true;
    } else if (number % 2 === 0 || number === 1) {
        return false;
    } else {
        //for all non edge cases check isPrime by seeing if anything divides nicely
        //start at (number-1)/2, check if number is divisible, don't check 1
        let factor = (number - 1) / 2;
        while (factor > 1) {
            if (number % factor === 0) {
                return false
            }
            //decrement factor
            factor -= 1;
        }
        return true;
    }
}

console.log(isPrime(2), true);
console.log(isPrime(10), false);
console.log(isPrime(11), true);
console.log(isPrime(9), false);
console.log(isPrime(2017), true);
console.log(isPrime(1), false);