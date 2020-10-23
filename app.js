const exercises = [
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps',
        bodyPart: 'arms'  
    },
    {
        exercise: "running",
        bodyType: "quads",
        bodyPart: "legs"
    },
    {
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyPart: 'core'
    }
];

const container = document.querySelector('.container');

function addExercisesToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let exercise = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exercise;

        container.appendChild(newElement);
        
    }
    // interate thru the array
    // set each element to a variable
    // create a new element
    // access "exercise" key to get value
    // add value text to element (textContent)
    // append new element to container
}
addExercisesToContainer(exercises);

function addBodyTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyType;

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