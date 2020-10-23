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
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyPart: 'core'
    }

];

const container = document.querySelector('.container');

for (let i= 0; i <Array.length; i++) {
    let exercise = array[i].exercise;
    console.log(exercise);

}

function Container(arry) {
    for (let i = 0; i <array.length; i++); {
        let exercise = array[i].exercise;
        let newElement = document.createElement ('p');
        newElement.textContent = exercise;
        container.appendChild(newElement);
    }
}