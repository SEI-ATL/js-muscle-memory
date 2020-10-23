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
         exerices: 'sit ups',
         bodyType: 'abs',
         bodyPart: 'core',
     }
];

const container = document.querySelector('.container')

function addExercisesToContainer(array) {
// iterate through the array
    for (let i = 0; i < array.length; i++) {
    // set each element to a variable
    let exercise = array[i].exercise;
    
// create a new element
let newElement = document.createElement('p');
newElement.textContent = exercise;

container.appendChild(newElement);

}
}
addExercisesToContainer(exercises);
// access "exercise" key to get a value
// add value text to element (textContent)
// append new element to container
    
function addBodyTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        let bodyType = array[i].bodyType;
    let newElement = document.createElement('p');
    newElement.textContent = bodyType;
    
    container.appendChild(newElement);
    
    }
    }
    addBodyTypesToContainer(exercises);

    function addBodyPartToContainer(array) {
        for (let i = 0; i < array.length; i++) {
            let bodyPart = array[i].bodyPart;
        let newElement = document.createElement('p');
        newElement.textContent = bodyPart;
        
        container.appendChild(newElement);
        
        }
        }
        addBodyTypesToContainer(exercises);


