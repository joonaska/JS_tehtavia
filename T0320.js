const mina = {
  etunimi: 'Joonas',
  sukunimi: 'Kangaskoski',
  kengannumero: 44,
  harrastukset: ['Lenkkeily', 'Kuntosali', 'Koodailu'],
  kotipaikka: { kunta: 'Jyväskylä', maakunta: 'Keski-suomi' },
};

function esittely(hlo) {
  // taas kopioidaan
  const x = { ...hlo };
  // palautetaan objekti jossa lyhyt,keskipitka,pitka
  return {
    lyhyt: `Henkilö ${x.etunimi.charAt(0)}.${x.sukunimi}, kotipaikka ${
      hlo.kotipaikka.kunta
    }`,
    keskipitka: `Henkilö ${x.etunimi} ${x.sukunimi}, jonka kotipaikka on ${x.kotipaikka.kunta} maakunassa ${x.kotipaikka.maakunta}. Hänellä on kengät numeroltaan ${x.kengannumero}`,
    pitka: `Henkilö ${x.etunimi} ${x.sukunimi}, jonka kotipaikka on ${x.kotipaikka.kunta} maakunnassa ${x.kotipaikka.maakunta}. Hänellä on kengät numeroltaan ${x.kengannumero} ja ${x.harrastukset.length} harratusta: ${x.harrastukset}`,
  };
}
// luodaan mie
const mie = esittely(mina);
// testataan tulostukset eri versioin, bueno!
console.log(mie.lyhyt);
console.log(mie.keskipitka);
console.log(mie.pitka);
