// ympyra.js
// otetaan vakiot moduulista käyttöön tietoa
const vakiot = require('./vakiot.js');

const ympyranKeha = (halkaisija) => {
  if (typeof halkaisija !== 'number' || isNaN(halkaisija)) {
    throw Error('Halkaisijan tulee olla numero!');
  }
  return vakiot.pii * halkaisija;
};
const pintaAla = (halkaisija) => {
  let sade = halkaisija / 2;

  return vakiot.pii * Math.pow(sade, 2);
};

module.exports = {
  keha: ympyranKeha,
  pinta: pintaAla,
};
