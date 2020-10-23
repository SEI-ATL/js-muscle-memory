const exercises = [{
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs'
    },
    {
        exercise: 'dumbell curls',
        bodyType: 'bicep',
        bodyPart: 'arms'
    },
    {
        exercise: 'sit-ups',
        bodyType: 'abs',
        bodyPart: 'core'
    },
];

//make a list
const exerciseList = document.createElement('ul');
exerciseList.innerText = 'EXERCISES:';
exerciseList.style.lineHeight = '2';
const container = document.querySelector('.container');
container.appendChild(exerciseList);

//make a function to add each item
function addExercises(array) {
    //if generated from user input, handle if key DNE
    //loop through array
    for (elem of array) {
        for (key of Object.keys(elem)) {
            //create new <li>
            const exerciseListItem = document.createElement('li');
            //take exercise key value and create <li> with exercise as text
            exerciseListItem.innerText = `${key}: ${elem[key]}`;
            exerciseListItem.style.textTransform = 'capitalize';
            if (key === 'exercise') {
                exerciseListItem.style.fontWeight = 'bold';
            }
            //append to <ul>
            exerciseList.appendChild(exerciseListItem);
        }
    }
}


addExercises(exercises);