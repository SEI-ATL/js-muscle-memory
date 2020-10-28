const arr = [
    {
        name: 'ahri',
        lane: 'mid',
        type: 'magic damage'
    },
    {
        name: 'evelynn',
        lane: 'jungle',
        type: 'magic damage'
    },
    {
        name: 'caitlyn',
        lane: 'bot',
        type: 'physical damage'
    },

]

const container = document.querySelector('.container');

addNamesToContainer = (array) => {

// iterate through array
    for (let i=0; i<array.length; i++){
        //set each element to a variable
        let element = array[i].name;
        console.log(element);
        let newElement = document.createElement('p');
        newElement.textContent = element;
        container.appendChild(newElement);

}


addNamesToContainer(arr);

addLanetoContainer = (array) => {

    for (let i=0; i<array.length; i++){
        let element = array[i].lane;
        document.querySelectorAll('p')[i] = element;
        container.appendChild(newElement);
}
}
}


//notes

// function                          const function(){....}
// function declaration>>>>          functionname();
// function expression >>>          const functionname = function(name){...}
// fat arrow>>>                     const functionaname = () => {...}

