const readlineSync = require('readline-sync');

let numerot = [];
do {
  const luku = readlineSync.question('Anna luku (1-30) ');
  if (luku <= 0 || luku >= 31) {
    console.log('Luvun piti olla väliltä 1-30');
  } else {
    numerot.push(luku);
  }
} while (readlineSync.keyInYNStrict('Syotatko lisaa numeroita?'));
// muutetaan string taulukko numerotaulukoksi

const arvot = numerot.map((i) => Number(i));
// lajitellaan annetut numerot isoimmasta pienempään
arvot.sort((a, b) => b - a);
// tulostetaan järjestys
for (let i = 0; i < arvot.length; i++) {
  console.log(arvot[i]);
}

//lukujen summa
let summa = arvot.reduce((a, b) => a + b);
console.log('Lukujen summa: ' + summa);
// Suurin luku
let suurinLuku = Math.max(...arvot);
console.log('Suurin luku: ' + suurinLuku);
// Pienin luku
let pieninLuku = Math.min(...arvot);
console.log('Pienin luku: ' + pieninLuku);
// Keskiarvo
let keskiArvo = Math.round((summa / arvot.length) * 100) / 100;
console.log('Lukujen keskiarvo: ' + keskiArvo);
