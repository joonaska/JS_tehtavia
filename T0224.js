const readlineSync = require('readline-sync');

const minLuku = 1;
const maxLuku = 30;
let arvattava;
let arvaus;
let arvaustenLkm;
do {
  // pelin aloitus tuloste
  console.log(
    '*** Numeron arvaus ***' +
      '\n' +
      'Ajattelen lukua väliltä 1 - 30' +
      '\n' +
      'Tehtäväsi on arvata mahdollisimman nopeasti tämä luku'
  );
  // arvattava numero, arpoo aina pelin alkaessa
  arvattava = Math.floor(Math.random() * (maxLuku + 1 - minLuku)) + minLuku;

  arvaustenLkm = 0;
  do {
    // jokainen arvaus eli syöte kasvattaa arvausten lukumäärää
    (arvaus = parseInt(readlineSync.question('Arvauksesi? '))), arvaustenLkm++;

    if (arvaus < 1 || arvaus > 30) {
      console.log('HOXHOX! arvauksen piti olla väliltä 1-30');
    } else if (arvaus < arvattava) {
      console.log('Väärin! ajattelen suurempaa lukua');
    } else if (arvaus > arvattava) {
      console.log('Väärin! ajattelen pienempää lukua');
    } else {
      console.log('Oikein! arvaustesi lukumäärä oli: ' + arvaustenLkm);
    }
    // peli rallattaa niin kauan kun arvaus ei ole sama kuin arvattava
  } while (arvaus != arvattava);
} while (readlineSync.keyInYNStrict('Haluatko jatkaa? '));
