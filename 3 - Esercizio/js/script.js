//Calcola la somma dei primi 10 numeri di un array.

const number = 
[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12

];
let sum = 0;


for(let i=0; i<10; i++){
    sum+=number[i];
}

let average = sum/10;


console.log(sum);
console.log(average);