const exercises = [
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps',
        bodyPart: 'arms'
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'leg'
    },
    {
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyPart: 'core'
    }
];

const container = document.querySelector('.container')

function addExercisesToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
            // set each element to a variable
            let exercise = array [i].exercise;
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

function addBodyType(array) {
    for (let i = 0; i < array.length; i++) {
            let bodyType = array [i].bodyType;
            let newElement = document.createElement('p');
            newElement.textContent = bodyType;

            container.appendChild(newElement);
    }

}

addBodyType(exercises);

function addBodyPart(array) {
    for (let i = 0; i < array.length; i++) {
            let bodyPart = array [i].bodyPart;
            let newElement = document.createElement('p');
            newElement.textContent = bodyPart;
            newElement.style.color = 'red';

            container.appendChild(newElement);
    }

}

addBodyPart(exercises);