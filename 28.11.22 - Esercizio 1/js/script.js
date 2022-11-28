// stampa la potenza di 2 fino a mille


const number = 2;
let result = 0;
let i = 0;

do {
    result = number ** i;
    i++;
    console.log(result);
} while (result <= 1000);



/*
for (let i = 0; i <= 1000; i++) {
    result = number ** i;
    console.log(result);
}*/