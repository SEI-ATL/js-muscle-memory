const exercises = [
    {
        activity: 'running',
        muscles: 'quads',
        body: 'legs'
    },
    {
        activity: 'dumbbell curls',
        muscles: 'biceps',
        body: 'arms'
    },
    {
        activity: 'situps',
        muscles: 'abs',
        body: 'stomach' 
    }
];

const container = document.querySelector('.container')

function addExercisesToContainer(array) {
    // Iterate over array
    for (let i = 0; i < array.length; i++) {
        // Set each element to a variable inside the array to get its value
        let exercise = array[i].activity;
        // Create new element
        let newElement = document.createElement('p');
        // Add value text to element (textContent)
        newElement.textContent = exercise;
        // Append nw element to container
        container.appendChild(newElement);
    }
}

addExercisesToContainer(exercises);

function addBodyTypeToContainer(array) {
    // Iterate over array
    for (let i = 0; i < array.length; i++) {
        // Set each element to a variable inside the array to get its value
        let type = array[i].muscles;
        // Create new element
        let typeElement = document.createElement('p');
        // Add value text to element (textContent)
        typeElement.textContent = type;
        // Append nw element to container
        container.appendChild(typeElement);
    }
}

addBodyTypeToContainer(exercises);

function addBodyPartToContainer(array) {
    // Iterate over array
    for (let i = 0; i < array.length; i++) {
        // Set each element to a variable inside the array to get its value
        let part = array[i].body;
        // Create new element
        let partElement = document.createElement('p');
        // Add value text to element (textContent)
        partElement.textContent = part;
        // Append nw element to container
        container.appendChild(partElement);
    }
}

addBodyPartToContainer(exercises);