'use strict';



const dado = [5, 3, 1, 2, 4, 6]; 

const valoreMaxDadi = dado.length;
const randPlayerIndex = Math.floor(Math.random() * valoreMaxDadi);
const randComputerIndex = Math.floor(Math.random() * valoreMaxDadi);

const randPlayer = dado[randPlayerIndex];
const randComputer = dado[randComputerIndex];

if (randPlayer === randComputer) {
  console.log(`avete pareggiato con il numero ${randPlayer}`);
} else if (randPlayer > randComputer) {
  console.log(`giocatore vince con ${randPlayer} contro ${randComputer}`);
} else {
  console.log(`computer vince con ${randComputer} contro ${randPlayer}`);
}

