let luvut = [10, 20, 30];
function laskeMontaYhteenTaulukko(a) {
  // tarkistetaan että parametri on annettu kutsussa, ellei niin 0
  a = typeof a !== 'undefined' ? a : 0;
  // tarkistetaan että parametri on taulukko/object js:ssä, ellei niin 0
  a = typeof a === 'object' ? a : 0;
  // lasketaan taulukon arvot yhteen
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  // palautetaan summa.
  return sum;
}
console.log(laskeMontaYhteenTaulukko(luvut));
