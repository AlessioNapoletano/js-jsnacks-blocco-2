/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor', 'Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastNames = ['Cappelletti', 'Jager', 'Porcinelli', 'Buffetti', 'Forghieri', 'Papagni', 'Marazzini'];

const guests = [];

/*
for (let i = 0; i < Math.ceil(Math.random() * 15) + 4; i++){
    let randomNamesIndex = Math.floor(Math.random() * (names.length));
    let randomLastNamesIndex = Math.floor(Math.random() * (lastNames.length));
    
    const guest = names[randomNamesIndex] + " " + lastNames[randomLastNamesIndex];

    guests.push(guest);
    
}
console.log(guests);
*/

while (guests.length < 15){
    let randomNamesIndex = Math.floor(Math.random() * (names.length));
    let randomLastNamesIndex = Math.floor(Math.random() * (lastNames.length));
    
    const guest = names[randomNamesIndex] + " " + lastNames[randomLastNamesIndex];

    if (guests.indexOf(guest) === -1){
        guests.push(guest);
    }
    

}
console.log(guests);