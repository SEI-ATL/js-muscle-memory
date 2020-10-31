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

// function isPrime(number) {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
    
// }
// console.log(isPrime(2));
//1
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(5));
//2
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(56));
//3
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(68));
//4
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(97));
//5
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(69));
//6
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(isPrime(88));
//7
// isPrime = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(45));
//8
// isPrime = (number) => {
//     for ( i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(77));
//9
// isPrime = (number) => {
//     for (i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(105));
//10
isPrime = (number) => {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
// console.log(isPrime(324));
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

// function firstNPrimes(n) {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;

// }
// console.log(firstNPrimes(1));

//1
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(1));
//2
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(2));
//3
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(3));
//4
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(4));
//5
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(5));
//6
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(6));
//7
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(7));
//8
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(8));
//9
// firstNPrimes = (n) => {
//     const primes = [];
//     let startingNum = 2;
//     while (primes.length < n) {
//         if (isPrime(startingNum)) {
//             primes.push(startingNum);
//         }
//         startingNum += 1;
//     }
//     return primes;
// }
// console.log(firstNPrimes(9));
//10
firstNPrimes = (n) => {
    const primes = [];
    let startingNum = 2;
    while (primes.length < n) {
        if (isPrime(startingNum)) {
            primes.push(startingNum);
        }
        startingNum += 1;
    }
    return primes;
}
// console.log(firstNPrimes(10));

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/
// 1
// function sONP(n) {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum

// }
// console.log(sONP(0));
//2
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(2));
//3
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(3));
//4
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(4));
//5
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(5));
//6
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(6));
//7
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++ ) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(7));
//8
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(8));
//9
// sONP = (n) => {
//     let sum = 0;
//     const nPrimes = firstNPrimes(n);
//     for (i = 0; i < nPrimes.length; i++) {
//         sum = sum + nPrimes[i];
//     }
//     return sum
// }
// console.log(sONP(9));
sONP = (n) => {
    let sum = 0;
    const nPrimes = firstNPrimes(n);
    for ( i = 0; i < nPrimes.length; i++) {
        sum = sum + nPrimes[i];
    }
    return sum
}
console.log(sONP(10));