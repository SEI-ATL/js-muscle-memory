/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

adults(ppl); // => [ 'Khalid Robinson', 'Post Malone' ]
***********************************************************************/

const ppl = [
  { name: "Khalid Robinson", age: 22 },
  { name: "Ariel Winter", age: 20 },
  { name: "Post Malone", age: 25 },
  { name: "Willow Smith", age: 17 },
];

function adults(people) {
  let adults = [];
  for (i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.age >= 18) {
      adults.push(person.name);
    }
  }
  return adults;
}

console.log(adults(ppl)); // => [ 'Khalid Robinson', 'Post Malone' ]
