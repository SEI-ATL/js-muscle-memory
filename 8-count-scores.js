/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

const ppl = [ 
    {name: "Pete", score: 10},
    {name: "Mike", score : 10},
    {name: "Pete", score: -8},
    {name: "Dexter", score: 12}
];

const countPpl = countScores(ppl);
countPpl; //=> { Pete: 2, Mike: 10, Dexter: 12 }

Example 2

const peeps = [
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2}
];
countScores(peeps); //=> { Pete: 4, Mike: 4, Dexter: 6 }
***********************************************************************/


// const ppl = [ 
//   {name: "Pete", score: 10},
//   {name: "Mike", score : 10},
//   {name: "Pete", score: -8},
//   {name: "Dexter", score: 12}
// ];
// function countScores(people) {
//     let finalScore = {};
//     for (i = 0; i < people.length; i++) {
//       if (people[i]['name'] in finalScore) {
//         finalScore[people[i]['name']] += people[i]['score'];
//       } else {
//         finalScore[people[i]['name']] = people[i]['score'];
//       }
//     }
//   return finalScore;
// }
// console.log(countScores(ppl));
    

const peeps = [
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2}
];

// countScores = (people) => {
//   let newObject = {};
//   for (i= 0; i < people.length; i++) {
//     if (people[i]['name'] in newObject) {
//       newObject[people[i]['name']] += people[i]['score'];
//     } else {
//         newObject[people[i]['name']] = people[i]['score']
//     }
//   }
  
//   return newObject;
// };


// console.log(countScores(peeps));

//1
// countScores = (people) => {
//   let newObject = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObject) {
//       newObject[people[i]['name']] += people[i]['score'];
//     } else {
//       newObject[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObject
// };
// console.log(countScores(peeps));
//2
// countScores = (people) => {
//   let newObject = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObject) {
//       newObject[people[i]['name']] += people[i]['score'];
//     } else {
//       newObject[people[i]['name']] = people[i]['score']
//     }
//   }
//   return newObject;
// };
// console.log(countScores(peeps));
//3
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//4
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//4
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//5
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//6
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//7
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//8
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//9
// countScores = (people) => {
//   let newObj = {};
//   for (i = 0; i < people.length; i++) {
//     if (people[i]['name'] in newObj) {
//       newObj[people[i]['name']] += people[i]['score'];
//     } else {
//       newObj[people[i]['name']] = people[i]['score'];
//     }
//   }
//   return newObj;
// }
// console.log(countScores(peeps));
//10
countScores = (people) => {
  let newObj = {};
  for (i = 0; i < people.length; i++) {
    if (people[i]['name'] in newObj) {
      newObj[people[i]['name']] += people[i]['score'];
    } else {
      newObj[people[i]['name']] = people[i]['score'];
    }
  }
  return newObj;
}
console.log(countScores(peeps));




