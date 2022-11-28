// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbers = [10, 22, 33, 44, 55, 60, 70, 80, 90];
const ulElement = document.querySelector("ul.list-group");
const sumOutput = document.getElementById("sum");
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 != 0) {
        const newLiElement = document.createElement("li");
        newLiElement.classList.add("list-group-item");
        newLiElement.append("Numero in posizione dispari: " + numbers[i])
        ulElement.append(newLiElement);
        console.log("Questo numero è in una posizione dispari, verrà sommatto: " + numbers[i]);    
        sum = sum + numbers[i];
    }

}

console.log("somma di tutti i numeri nelle posizione dispari dell'array: " + sum);
sumOutput.innerHTML = "la somma dei precedenti numeri è = " + sum;