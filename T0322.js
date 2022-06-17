const mina = {
  etunimi: 'Joonas',
  sukunimi: 'Kangaskoski',
  kengannumero: 44,
  harrastukset: ['Lenkkeily', 'Kuntosali', 'Koodailu'],
  kotipaikka: { kunta: 'Jyväskylä', maakunta: 'Keski-suomi' },
  nuku: () => {
    console.log('ZZZZzzzzzz!');
  },
  juttele: (lause) => {
    console.log(lause);
  },
  // luodaan esittele metodi
  esittele: function (lyhyt) {
    if (lyhyt === true) {
      console.log(`Olen ${this.etunimi} ${this.sukunimi}`);
    } else {
      console.log(
        `Olen ${this.etunimi} ${this.sukunimi}, kotipaikkani on ${this.kotipaikka.kunta}  ja kengännumeroini on ${this.kengannumero}`
      );
    }
  },
};
mina.esittele(true);
