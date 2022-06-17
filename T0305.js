const readlineSync = require('readline-sync');

function pyydaLuku() {
  const minLuku = 0;
  const maxLuku = 31;
  let syote;
  const teksti = 'Anna luku väliltä 1-30, niin näytän sen sinulle!';
  console.log(teksti);
  do {
    syote = parseInt(readlineSync.question('Anna luku: '));

    // tarkistetaan vielä että syöte on numero eikä esim. stringi, rallatus pyörii niin kauan
    //  kunnes syote on oikeanlainen eli numero väliltä 1-30
    try {
      if (syote <= minLuku || syote >= maxLuku) {
        throw 'HOX!HOX! Syötteen tulee olla numero väliltä 1-30';
      } else if (syote !== 'number' || isNaN(syote)) {
        throw 'HOX!HOX! Syötteen tulee olla numero väliltä 1-30';
      } else {
        return console.log(`Syöttämäsi luku oli ${syote}`);
      }
    } catch (error) {
      console.log('Error: ' + error);
    }
  } while (syote < 1 || syote > 30 || syote !== 'number');
}
pyydaLuku();
