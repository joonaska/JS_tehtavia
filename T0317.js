function pienimmat2(taulukko, lkm) {
  // luodaan uusi muuttuja funktion käyttöön, jolloin aiemmin
  // annettu taulukko ei mutatoidu
  let x = [...taulukko];
  return x.sort((a, b) => a - b).splice(0, lkm);
}

const luvut = [5, 10, 1, 8];
const uusi = pienimmat2(luvut, 2);
console.log(uusi);
// tarkistetaan että vanha on ennallaan.
console.log(luvut);
