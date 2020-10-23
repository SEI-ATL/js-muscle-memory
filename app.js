const exercises = [
    { 
        exercise: 'squats',
        bodyType: 'thighs',
        bodyPart: 'legs',
     },
     {
         exercise: 'running',
         bodyType: 'conditioning',
         bodyPart: 'quads',
     },
     {
         exercise: 'crunches',
         bodyType: 'core',
         bodyPart: 'stomach',
     }
];

const container = document.querySelector('.container');

function addExercisesToContainer(array) {
    //iterate through the array
    for (let i = 0; i < array.length; i++) {
        //set each element to a variable
        let exercise = array[i].exercise;
        //create a new element
        let newElement = document.createElement('p');
        //access "exercise" key to get value
        //add value text to element (textContent)
        newElement.textContent = exercise;
        //append new element to containe
        container.appendChild(newElement);

    }
}

addExercisesToContainer(exercises);

function addBodyTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyType;
        newElement.style.color = 'red';
        container.appendChild(newElement);
    }
}

addBodyTypeToContainer(exercises);

function addBodyPartToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyPart = array[i].bodyPart;
        let newElement = document.createElement('p');
        newElement.textContent = bodyPart;
        container.appendChild(newElement);
    }
}

addBodyPartToContainer(exercises);