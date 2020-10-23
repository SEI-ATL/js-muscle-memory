const exercises = [
    {
        exercise: 'cycling',
        type: 'cardio',
        bodyPart: 'arms',
    },
    {
        exercise: 'push ups',
        type: 'strength',
        bodyPart: 'legs',
    },
    {
        exercise: 'sit ups',
        type: 'abs',
        bodyPart: 'core',
    }
];

const container = document.querySelector('.container');

function addExercisesToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to a variable
        let variable = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = variable;
        container.appendChild(newElement);

    }
    // create new element
    // access "exercise" to get value
    // add value text to element (textContent)
    // append new element to the container
}
addExercisesToContainer(exercises);


function addTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let type = array[i].type;
        let typeElement = document.createElement('p');
        typeElement.textContent = type;
        container.appendChild(typeElement);
    }
}
addTypeToContainer(exercises);


function addPartToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyPart = array [i].bodyPart;
        let partElement = document.createElement('p');
        partElement.textContent = bodyPart;
        container.appendChild(partElement);
    }
}
addPartToContainer(exercises);