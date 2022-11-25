/*
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
*/


const numbers = [];

for (let i = 0; i < 6; i++) {
    const inputNumber = parseInt(prompt("Inserisci un numero: "));

    if (inputNumber % 2 != 0){
        numbers[i] = inputNumber;
    } 

    

        
}
console.log(numbers)