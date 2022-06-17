const merkkijono = 'Kissa';

// luodaan uusi muuttuja tulokselle.
let merkkiJonoTakaPerin = '';
// käydään merkkijonon merkit yksitellen läpi takaperin
// ja lisätään kirjain uuteen muuttujaan
for (let i = merkkijono.length - 1; i >= 0; i--) {
  merkkiJonoTakaPerin += merkkijono[i];
}
console.log(merkkiJonoTakaPerin);
