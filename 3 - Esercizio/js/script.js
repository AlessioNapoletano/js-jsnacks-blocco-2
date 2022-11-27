/*
Calcola la somma dei primi 10 numeri di un array.
Calcola la somma e la media dei primi 10 numeri di un array.
Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.
*/

const number =
    [
        1,
        2,
        3,
        44,
        5,
        6,
        78,
        8,
        9,
        10,
        11,
        12

    ];

let sum = 0;
let average = 0;
let max = 0;


for (let i = 0; i < 10; i++) {
    sum += number[i];

    if (number[i] > max) {
        max = number[i];
    }
}

average = sum / 10;

console.log("Il numero massimo inserito all'interno dell'array è: " + max);
console.log("La somma dei primi dieci numeri è: " + sum);
console.log("La media dei dieci numeri è : " + average);