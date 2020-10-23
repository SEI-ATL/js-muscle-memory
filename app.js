const exercises = [
    { 
        exercise: 'yoga',
        bodyType: 'core',
        bodyPart: 'abdomen'
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs'
    },
    {
        exercise: 'soccer',
        bodyType: 'hamstrings',
        bodyPart: 'legs'
    }
];

const container = document.querySelector('.container');

function addExercises(array) {
        // iterate through the array
        
        // create a new element
        // access "exercise" key to get value
        // add value text to element (textContent)
        // append that element to container
    for (i = 0; i < array.length; i++) {
        // set each element to a variable
        let activity = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = activity;

        container.appendChild(newElement);

    }
}

addExercises(exercises);

function addBodyType(array) {
    for (i = 0; i < array.length; i++) {
        let bodyType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyType;
        container.appendChild(newElement);
    }
}
addBodyType(exercises);

function addBodyPart(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].bodyType) {
            let btype = array[i].bodyPart;
            let newElement = document.createElement('p');
            newElement.textContent = btype;
            newElement.style.color = 'red';
            container.appendChild(newElement);
        } else {
            continue;
        }
    }
}
addBodyPart(exercises);