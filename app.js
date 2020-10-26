const exercises = [
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps',
        bodyParts: 'arms'
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyParts: 'legs'
    },
    {
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyParts: 'core'
    }
];

const container = document.querySelector('.container')

function addExercises(array) {
    for (let i = 0; i < array.length; i++) {
        let exercise = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exercise;
        container.appendChild(newElement);
    }
}

addExercises(exercises);

function AddBodyType(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyType;
        newElement.style.color = 'red';
        container.appendChild(newElement);
    }
}

AddBodyType(exercises)