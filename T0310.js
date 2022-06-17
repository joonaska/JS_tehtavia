const keskiarvoMerkkijono = (y, ...numerot) => {
  let summa = 0;
  // lasketaan taulukon numeroiden summa
  numerot.forEach((x) => {
    summa += x;
  });
  // lasketaan keskiarvo summa jaettuna taulukopituudella
  let ka = summa / numerot.length;
  // palautetaan tuloste
  return console.log(`Keskiarvo (${y}) on ${ka}`);
};
keskiarvoMerkkijono('ikä', 10, 20, 30, 40);
