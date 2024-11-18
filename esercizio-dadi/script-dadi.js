/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Logica
// Impostare il numero minimo e massimo da giocare
// Impostare la finestra di interazione dell'utente
// Impostare il numero random del computer
// Impostare sistema di verifica del numero del giocatore
// Impostare la condizione di vincita o perdita del gioco

min = 1;
max = 6;
let giocataPlayer;
const giocataPc = Math.floor(Math.random() * (max - min + 1) +min);
let isNumberValid = false;
let message;

while (!isNumberValid){
  giocataPlayer = parseInt(prompt('Inserisci un numero da 1 a 6'));
  if (!isNaN(giocataPlayer) && giocataPlayer > 0 && giocataPlayer < 7){
    isNumberValid = true;
  }
}

if (giocataPlayer > giocataPc){
  message = 'HAI VINTO';
} else if (giocataPc > giocataPlayer){
  message = 'HAI PERSO'
} else {
  message = 'PAREGGIO';
}

console.log('Player', giocataPlayer);
console.log('PC', giocataPc);
console.log(message);
