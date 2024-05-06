'use strict';


// LISTA UTENTI CHE POSSONO ACCEDERE
const mailList = ['christian', 'josue', 'bryan', 'marco', 'alejandro', 'alexis'];
let canAccess = false;


//NOME UTENTE CHE VUOLE ACCEDERE
const user = prompt('Inserisci il tuo nome').toLowerCase(); 

for (let i = 0; i < mailList.length; i++) {

    if (mailList[i] === user) {
        canAccess = true;
        break;
      }
 
}


if (canAccess === true) {
  console.log('Puoi accedere');
} else {
  console.log('Non puoi accedere');
}