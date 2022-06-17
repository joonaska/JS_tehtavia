const mina = {
  etunimi: 'Joonas',
  sukunimi: 'Kangaskoski',
  kengannumero: 44,
  harrastukset: ['Lenkkeily', 'Kuntosali', 'Koodailu'],
  kotipaikka: { kunta: 'Jyväskylä', maakunta: 'Keski-suomi' },
};
console.log(
  `Minä olen ${mina.etunimi} ja minulla on kengät numeroltaan ${mina.kengannumero}.
   Kotipaikkani on ${mina.kotipaikka.kunta} 
   ja minulla on ${mina.harrastukset.length} harrastusta`
);
