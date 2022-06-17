const ostokset = [
  { tuote: 'Maitoa', maara: '5 litraa' },
  { tuote: 'Kahvi', maara: '2 pakettia' },
  { tuote: 'Banaaneita', maara: '1 kilo' },
  { tuote: 'Leipä', maara: '1 kpl' },
];
// käydään taulukko läpi for of lauseella ja tulostetaan
// tuotteiden arvot
for (let a of ostokset) {
  console.log(`${a.tuote}`);
}
