const nimet = ['Pekka Ruuskanen', 'Anneli Tehhunen', 'Ilari Itäpuro'];

// käydään taulukon alkiot läpi, otetaan jokaisesta ensimmäinen kirjain,
// lisätään piste ja etsitään välilyönnin jälkeinen kirjain
const nimikirjaimet = nimet.map(
  (nimi) => nimi.charAt(0) + '.' + nimi.charAt(nimi.indexOf(' ') + 1)
);
console.log(nimikirjaimet);
