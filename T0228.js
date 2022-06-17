let ostoslista = [['Maitoa', 5], ['Kahvi', 2], ['Banaaneita'], ['Leipä', 2]];

// for (const [tuote, maara] of ostoslista) {
//   console.log(`tuote ${tuote}, määrä ${maara} `);
// }

// uusi tuote, lisätään spread syntaxilla vanhaan listaan
let uusiTuote = ['Piimä', 2];
ostoslista = [...ostoslista, uusiTuote];

// for (const [tuote, maara] of ostoslista) {
//   console.log(`tuote ${tuote}, määrä ${maara} `);
// }
// päivitetään vanha lista splice metodilla
ostoslista.splice(2, 1, ['Banaaneita', 1]);
// tulostetaan lopullinen lista
for (const [tuote, maara] of ostoslista) {
  console.log(`tuote ${tuote}, määrä ${maara} `);
}
