const exercises = [
    {
        exercise: "running",
        bodyType: "Quads",
        bodyPart: "legs"
     },
     {
         exercise: "push ups",
         bodyType: "chest",
         bodyPart: "pecks"
     },
     {
         exercise: "sit ups",
         bodytype: "abs",
         bodyPart: "core"
     }
];

const container = document.querySelector('.container');

function addExercisesToContainer(array) { 
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to a variable
        let exercise = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exercise;
        
        container.appendChild(newElement);

    } 
    // create a new element 
    // access "exercise" key to get value
    // add value text to element (textContent)
    // append new element to container
} 

addExercisesToContainer(exercises);



function addBodytypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyTypeVariable = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyTypeVariable;
        newElement.style.color = 'red';
        container.appendChild(newElement)
        container.appendChild(newElement);

    }
}

addBodyTypeToContainer(bodyType);