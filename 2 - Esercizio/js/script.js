//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



const button = document.querySelector("button");
const result = document.getElementById("output");

button.addEventListener("click", function () {
    const numberInput = document.getElementById("numbers");
    let number = parseInt(numberInput.value);
    if (number % 2 == 0) {
        console.log(number);
        result.innerHTML = number;
    } else {
        number++;
        console.log(number)
        result.innerHTML = number;
    }


});