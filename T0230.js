const readlineSync = require('readline-sync');

console.log(
  '\n' +
    '*** Palindromi-testaus ***' +
    '\n' +
    'Anna testattava sana/lause: esim. Aatu osaa soutaa' +
    '\n' +
    'Merkkijonon tulee olla vähintään 3 merkkiä pitkä' +
    '\n'
);
let syote,
  kelvollinen = false;
// tarkistetaan syotteen kelvollisuus
while (!kelvollinen) {
  const vastaus = readlineSync.question('Syota testattava sana/lause:');
  syote = String(vastaus);

  kelvollinen = typeof syote === 'string' && syote.length >= 3;
  if (!kelvollinen) {
    console.log('Piti olla yli kolme merkkiä');
  }
}
//muokataan syote isoihin kirjaimiin ja poistetaan välit ym.
let sana = syote.replace(/\s+/g, '').toUpperCase();
// jaetaan syote taulukkoon kirjain kerrallaan
let taulukko1 = sana.split('');
//console.log(taulukko1);
// käännetään edellisen taulukko väärinpäin, ilman että indexit kääntyy
let taulukko2 = taulukko1.slice().reverse();
//console.log(taulukko2);

// tarkistetaan onko taulukot samoja

if (taulukko1.every((val, index) => val === taulukko2[index])) {
  console.log(syote + ' on palindromi');
} else {
  console.log(syote + ' ei ole palindromi');
}
