/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
  oddArr = [];
  if (end < 0) {
    return "Only positive numbers allowed";
  } else {
    for (let i = 1; i <= end; i+=2) {
    //   if (i % 2 !== 0) {
        oddArr.push(i);
    //   }
    }
  }
  return oddArr;
}

//Two methods listed above. 

console.log(oddRange(13));
console.log(oddRange(-90));

