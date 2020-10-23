/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
    //from file/part 3
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

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
    //create array
    const primes = [];
    let startingNum = 2;
    //loop through numbers until array is filled with n primes
    while (primes.length < n) {
        //append primes to array
        if (isPrime(startingNum)) {
            primes.push(startingNum);
        }
        startingNum += 1;
    }
    return primes;
}

console.log(firstNPrimes(0), []); // => []
console.log(firstNPrimes(1), [2]); // => [2]
console.log(firstNPrimes(4), [2, 3, 5, 7]); // => [2, 3, 5, 7]

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
    let sum = 0;
    //get n primes
    const nPrimes = firstNPrimes(n);
    //loop through and add them up
    for (i = 0; i < nPrimes.length; i++) {
        sum = sum + nPrimes[i];
    }
    return sum
}

console.log(sumOfNPrimes(0), 0); // => 0
console.log(sumOfNPrimes(1), 2); // => 2
console.log(sumOfNPrimes(4), 17); // => 17