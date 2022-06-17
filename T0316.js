const ostokset = [
  { tuote: 'Maitoa', maara: '5 litraa' },
  { tuote: 'Kahvi', maara: '2 pakettia' },
  { tuote: 'Banaaneita', maara: '1 kilo' },
  { tuote: 'Leipä', maara: '1 kpl' },
];
// luodaan uusi muuttuja, otetaan vain tuotteiden nimet talteen
const tuotteet = ostokset.map((a) => {
  return a.tuote;
});
// logataan uusi taulukko
console.log(tuotteet);
