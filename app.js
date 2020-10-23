const exercises = [
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps',
        bodyPart: 'arms',
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs',
    },
    {
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyPart: 'core',
    }
];

const container = document.querySelector('.container');

function addExerciseToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to array
        let exercise = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exercise;
        // console.log(container);

        container.appendChild(newElement);

    }
}


addExerciseToContainer(exercises);

function addBodyTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyType;;

        container.appendChild(newElement);

    }
}
addBodyTypeToContainer(exercises);

function addBodyPartToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyPart = array[i].bodyPart;
        let newElement = document.createElement('p');
        newElement.textContent = bodyPart;;
        newElement.style.color = 'red'

        container.appendChild(newElement);

    }
}
addBodyPartToContainer(exercises);