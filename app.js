const exercises = [
    {
        exercise: 'dumbbell curl',
        bodyType: 'biceps',
        bodyPart: 'arms'
    },
    {
        exercise: 'running',
        bodyType: 'legs',
        bodyPart: 'quads'
    },
    {
        exercise: 'sit-ups',
        bodyType: 'abs',
        bodyPart: 'core'
    },   
];

const container = document.querySelector(".container");

function addExercisesToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to a variable
        let exercise = array[i].exercise;
        //console.log(exercise);
        let newElement = document.createElement('p');
        //console.log(newElement);
        newElement.textContent = exercise;
        //console.log(newElement);
        container.appendChild(newElement);
        console.log(container);
    }
    // create a new element 
    // access "exercise" key to get value
    // add value text to element (textContent)
    // append new element to container

} 

console.log(addExercisesToContainer(exercises));

const addBodyTypeToContainer = (array) => {
    for (let i = 0; i < array.length; i++) {
        let bodytype = array[i].bodyType;
        // console.log(bodytype);
        let newElement =  document.createElement('p');
        // console.log(newElement);
        newElement.textContent = bodytype;
        container.appendChild(newElement);
        // console.log(container);
    }
}

console.log(addBodyTypeToContainer(exercises));

const addBodyPartToContainer = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].bodyType) {
            let bodypart = array[i].bodyPart;
            // console.log(bodypart);
            let newElement =  document.createElement('p');
            // console.log(newElement);
            newElement.textContent = bodypart;
            newElement.style.color = 'red';
            newElement.style.textTransform = 'uppercase';
            newElement.style.margin = '0 auto';
            container.appendChild(newElement);
            // console.log(container);
        } else {
            continue;
        }
    }
}

console.log(addBodyPartToContainer(exercises));