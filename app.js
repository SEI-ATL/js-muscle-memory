const exercises = [
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps',
        bodyPart: 'arms'
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs'
    },
    {
        exercise: 'situps',
        bodyType: 'abs',
        bodyPart: 'core'
    }
];

const container = document.querySelector('.container')

function addExercisesToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each elementto a variable
        let exercise = array[i].exercise;
        let newElement = document.createElement('p')
        newElement.textContent = exercise;
        
        container.appendChild(newElement);
        console.log(container);
    }

    // creat a new Element
    // access "exercise" key to get value 
    // add value text to element (textContent)
    // append new element to container
}

addExercisesToContainer(exercises);


function addBodyTypeToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each elementto a variable
        if (array[i].bodytype) {
            let btype = array[i].bodyType;
            let newElement = document.createElement('p')
            newElement.textContent = btype;
            container.appendChild(newElement);
        
            }   else {
                continue;
        }
        
    }    

    // creat a new Element
    // access "exercise" key to get value 
    // add value text to element (textContent)
    // append new element to container
}

addBodyTypeToContainer(exercises);