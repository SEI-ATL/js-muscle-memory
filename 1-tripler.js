
function tripler(array) {}
const result = [];

for (let i = 0; i < array.length; i++) {
    let num = array[1]; 
    let multiple = num * 3;
 result.push(multiple); 
//  3, 6, 9
}
return result;
}

console.log(tripler([1,2,3]));
console.log(tripler([4, 1, 7]));



