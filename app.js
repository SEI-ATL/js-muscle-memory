const exercises = [
    {
        exercise: 'push-ups',
        bodyType: 'chest',
        bodyPart: 'arms'
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs'
    },
    {
        exercise: 'sit',
        bodyType: 'abs',
        bodyPart: 'core'
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

function addBodyTypeToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
    // set each element to a variable
        let bType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bType;
        newElement.style.color = 'red';
        container.appendChild(newElement);
    }

    function addBodyPartToContainer(array) {
        // iterate through the array
        for (let i = 0; i < array.length; i++) {
        // set each element to a variable
            let bPart = array[i].bodyPart;
            let newElement = document.createElement('p');
            newElement.textContent = bodyPart;
    
            container.appendChild(newElement);
        }
    }
}
