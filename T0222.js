const readlineSync = require('readline-sync');

console.log(
  'Anna joukkueesi nimi. niin teen siitä lyhenteen! huomioi että, nimessä tulee olla vähintään 3 merkkiä'
);
let joukkue = '';
// toistetaan kysymystä ja virhettä niin kauan kunnes, ehdot täyttyy.
do {
  joukkue = readlineSync.question('Joukkueen nimi?');
  if (joukkue.length < 3) {
    console.log('Hei nimessä piti olla vähintään kolme merkkiä!');
  }
} while (joukkue.length < 3);

let etsiVali = joukkue.indexOf(' ');
let generoiLyhenne =
  joukkue.charAt(0) + joukkue.charAt(1) + joukkue.charAt(etsiVali + 1);
// slice() leikkaa stringin perältä viimeiset 2 charria.
let generoilyhenne2 = joukkue.charAt(0) + joukkue.slice(-2);
// indexof palauttaa arvon -1 jos väliä ei löydy, siis kielletään että arvo ei saa olla -1, jolloin väli löytyy.
if (etsiVali != -1) {
  console.log(
    joukkue + ' ' + 'jalkapallo joukkueen lyhenne on' + ' ' + generoiLyhenne
  );
} else {
  console.log(
    joukkue + ' ' + 'jalkapallo joukkueen lyhenne on' + ' ' + generoilyhenne2
  );
}
