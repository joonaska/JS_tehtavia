const arvoLuku = (minLuku, maxLuku) =>
  Math.floor(Math.random() * (maxLuku + 1 - minLuku)) + minLuku;

const etunimet = [
  'Anneli',
  'Pekka',
  'Irmeli',
  'Kalervo',
  'Aulikki',
  'Jarkko',
  'Kaarina',
  'Reino',
];

const sukunimet = [
  'Auvinen',
  'Pekkanen',
  'Immonen',
  'Kankainen',
  'Pennanen',
  'Ruuskanen',
  'van der Vaart',
];

const Henkilo = {
  esittaydy: function () {
    console.log(
      `Nimeni on ${this.sukunimi}, ${this.etunimi} ${this.sukunimi} `
    );
  },
  // kerroIka funktio
  kerroIka: function () {
    console.log(`Olen ${this.ika}-vuotias`);
  },
};

const ihmiset = [];
for (let i = 0; i < 5; i++) {
  // luodaan object.creatella uusia tyyppejä, lisänä myös ika
  const tyypit = Object.create(Henkilo);
  (tyypit.etunimi = etunimet[arvoLuku(0, etunimet.length - 1)]),
    (tyypit.sukunimi = sukunimet[arvoLuku(0, sukunimet.length - 1)]),
    (tyypit.ika = new Date().getFullYear() - arvoLuku(1970, 2000));
  ihmiset.push(tyypit);
}
console.log(ihmiset);
// kaikki esittäytyyy
ihmiset.forEach((a) => console.log(a.esittaydy()));
//ensimmäisen ja viimeisen ikäesittely
ihmiset[0].kerroIka();
ihmiset[ihmiset.length - 1].kerroIka();
