const exercises = [
    { 
        exercise: 'Dumbbell Curls',
        bodyType: 'Biceps',
        bodyPart: 'Arms'
    },
    {
        exercise: 'Running',
        bodyType: 'Quads',
        bodyPart: 'Legs'
    },
    {
        exercise: 'Sit Ups',
        bodyType: 'Abs',
        bodyPart: 'Core'
    }
];

const container = document.querySelector('.container')

function addExerciseToContainer(array) {
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
    // add value text to that element (textContent)
    // append the element to container
}

addExerciseToContainer(exercises);

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