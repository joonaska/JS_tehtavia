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
};
mina.nuku();
mina.juttele('Onko kaikki hyvin?');
