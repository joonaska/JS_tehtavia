const opiskelijat = [
  { nimi: 'Pekka', pisteet: 24, lapi: true },
  { nimi: 'Anneli', pisteet: 30, lapi: true },
  { nimi: 'Einari', pisteet: 13, lapi: false },
  { nimi: 'Inkeri', pisteet: 26, lapi: true },
  { nimi: 'Seppo', pisteet: 9, lapi: false },
  { nimi: 'Aulikki', pisteet: 4, lapi: false },
];

const lapaisseet3 = opiskelijat;
// luodaan muuttuja
let eiLapaissyt = opiskelijat
  // filteröidään vanhasta taulukosta opiskelijat jotka eivät läpäisseet
  //  ja pisteet alle 10
  .filter((op) => op.lapi == false && op.pisteet < 10)
  // järjestetään laskevaan järjestykseen
  .sort((a, b) => {
    return b.pisteet - a.pisteet;
  });
// logataan ulos uusi muuttuja eli uusi taulukko
console.log(eiLapaissyt);
// vanha taulukko edelleen entisensä
console.log(lapaisseet3);
