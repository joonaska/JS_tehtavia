function pienimmat3(taulukko, lkm) {
  // ei mutatoida alkuperäistä taulukkoa
  const taulukko2 = [...taulukko];
  // luodaan uusi muuttuja
  const obj = {
    // leikataan aiemmalla komennolla 2 ensimmäistä indexia ja
    // muihin sitten lopputaulukko
    pienimmat: taulukko2.sort((a, b) => a - b).splice(0, lkm),
    muut: taulukko2,
  };
  return obj;
}
// laitoin testimielessä vähän lisää lukuja.
const luvut = [5, 10, 1, 8, 12, 11];
const uusi = pienimmat3(luvut, 2);
console.log(uusi);
//const jaljelleJaaneet = uusi['muut'];
const [...jaljelleJaaneet] = uusi['muut'];
console.log(jaljelleJaaneet);
