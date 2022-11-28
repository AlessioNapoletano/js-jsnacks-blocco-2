// stampa la potenza di 2 fino a mille


const number = 2;
let result = 0;
let i = 0;

do {
    result = number ** i;
    i++;
    console.log(result);
} while (result <= 1000);

