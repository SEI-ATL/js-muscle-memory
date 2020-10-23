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


function countScores(people) {
    //create new object
    const totals = {};
    //loop through people
    for (person of people) {
        //if name already in new object, add to score, else create
        if (Object.keys(totals).indexOf(person.name === -1)) {
            //add key for name to new object
            //add score value as key:value
        } else {
            totals[person.name] = totals[person.name] + person.score;
        }
    }
    return totals;
}


const peeps1 = [
    { name: "Pete", score: 10 },
    { name: "Mike", score: 10 },
    { name: "Pete", score: -8 },
    { name: "Dexter", score: 12 }
];

const countPpl = countScores(peeps1);
console.log(countPpl); //=> { Pete: 2, Mike: 10, Dexter: 12 }

const peeps2 = [
    { name: "Pete", score: 2 },
    { name: "Dexter", score: 2 },
    { name: "Mike", score: 2 },
    { name: "Dexter", score: 2 },
    { name: "Mike", score: 2 },
    { name: "Pete", score: 2 },
    { name: "Dexter", score: 2 }
];
console.log(countScores(peeps2)); //=> { Pete: 4, Mike: 4, Dexter: 6 }