const exercises = [
    { 
        exercise: "bench",
        bodyType: "pectorals",
        bodyPart: "chest"
    },
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs'
    
    },
    {
        exercise: 'situps',
        bodyType: 'abdomen',
        bodyPart: 'core',
    }
];
const container = document.querySelector('.container');

function exerciseContainer(array) {
    //iterate through the array
    for (let i=0; i<array.length; i++){
        let exercise = array[1].exercise
        let newElement = document.createElement('p')
        newElement.textContent = 'exercise'
        container.appendChild(newElement);
        console.log(container)
    }
    // set each element to a variable 
    // create a new element 
    // access exercise key to get value
    // add the value text to the element (textContent)
    // append the new element to container 

}
exerciseContainer(exercises);


function addBodyTypeToContainer(array) {
    for( let i=0; i<array.length; i++){
        let body =array[i].bodyPart
        let newE = document.createElement(q)
        newE.textContent = 'type'
        container.appendChild(newE);
        console.log(container)
    }
}

addBodyTypeToContainer(newE);