const exercises = [
{
    exercise: 'dumbbell curls',
    bodyType: 'biceps',
    bodyParts: 'arms'
},

{
    exercise: 'running',
    bodyType: 'endurance',
    bodyPart: 'wholeBody'
},
{
    exercise: 'swimming',
    bodyType:  'cardio',
    bodyPart: 'wholeBody'
}
];

    // iterate through the array [objects]
    // set each element to a variable inside the array 
    // create a new element
    // add value text to element document.querySelector('.class').textContent

  
     const container = document.querySelector('.container');
 function addExercisesToContainer(array) {
     for (let i = 0; i < array.length; i++) {
         let exercise = array[i].exercise;
         let newElement = document.createElement('p');
         newElement.textContent = exercise;
         container.appendChild(newElement);
    }
    }
}
// add bodyType to container
//pass in an array
function addBodyTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[1].bodyType) {
           let newElement = document.createElement("p");
            newElement.textContent = bodyPart;
            newElement.style.color = 'red';
            container.appendChild(newElement);
        } else {
            continue;
        }
        }
addBodyTypeToContainer()

function isPrime(number) {
    
}