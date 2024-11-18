/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email*/

// Logica
// Creare un gruppo di mail
// Impostare una finestra di interazione con l'utente
// Impostare un Flag
// Impostare un message
// Creare un circuito di verifica
// Stampare il messaggio


const emails = ['francesco@email.com', 'gino@gmail.com', 'laura@libero.it', 'vanessa@icloud.it', 'renato@mail.com', 'gioia@live.it'];
let emailUser = prompt('Inserisci la tua email');
let emailValid = false;
let message;

for (let i = 0; i < emails.length; i++){
  if (emails[i] === emailUser){
    emailValid = true;
  }
}

if (!emailValid){
  message = 'La tua email non è registrata';
} else {
  message = 'La tua email è valida';
}

console.log(message);
console.log(emailValid);

