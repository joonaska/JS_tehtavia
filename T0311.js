// haetietojostain materiaalin functiot muutettu arrow funktioiksi, tässä ensimmäinen
const haeTietoaJostain = (haku, cb) => {
  console.log('Palveluun saatiin yhteys ja suoritetaan komento: ' + haku);
  let tulos = [];

  // tässä toinen arrow
  setTimeout(() => {
    if (haku === 'Hae kaikki') {
      tulos = [
        {
          nimi: 'Pekka',
          kengannumero: 43,
        },
        {
          nimi: 'Anneli',
          kengannumero: 37,
        },
      ];
    }

    if (typeof cb === 'function') {
      cb(tulos);
    }
  }, 3000);
};
// täällä viimeinen ja siihen lisätty muutos, että järjestää
// tuloksen kengännumeron mukaan nousevaksi.
haeTietoaJostain('Hae kaikki', (tulos) => {
  console.log(tulos.sort((a, b) => a.kengannumero - b.kengannumero));
});

console.log('Suoritus on täällä');
