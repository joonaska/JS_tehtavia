function kertotaulu(x, y) {
  const kertsi = [];
  // tarkistetaan onko syotteet ohjeiden mukaiset
  try {
    if (x < 0 || y < 0) {
      // jos ei niin heitetään error
      throw 'Argumenttien pitää olla positiivisia lukuja';
      // jos on niin antaa laulaa vaan
    } else {
      for (let i = 1; i <= y; i++) {
        kertsi.push(i * x);
      }
      return kertsi;
    }
    // kiinni otetun errorin tulostus
  } catch (error) {
    console.log('Error: ' + error);
    // tarkistus info et laitoinko muka oikeasti väärän luvun
    // tai mitkäs luvut laitoinkaan.
  } finally {
    console.log(`Syöttämäsi luvut oli ${x} ja ${y}`);
  }
}

console.log(kertotaulu(-1, 6));

// const kertotaulu = (x, y) => {
//   const kertsi = [];
//   if (x < 0 || y < 0) {
//     throw Error('Argumenttien tulee olla positiivisia lukuja');
//   }
//   try {
//     kertotaulu(-1, 8);
//   } catch (error) {
//     console.log('Error: ' + error);
//   } finally {
//     for (let i = 1; i <= y; i++) {
//       kertsi.push(i * x);
//     }
//     return kertsi;
//   }
// };

//console.log(kertotaulu(2, 3));
