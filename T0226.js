const kkNimet = [
  'Tammikuu',
  'Helmikuu',
  'Maaliskuu',
  'Huhtikuu',
  'Toukokuu',
  'Kesäkuu',
  'Heinäkuu',
  'Elokuu',
  'Syyskuu',
  'Lokakuu',
  'Marraskuu',
  'Joulukuu',
];

for (let i = 0; i <= kkNimet.length; i++) {
  switch (i + 1) {
    case 1:
    case 2:
    case 3:
      console.log(`${kkNimet[i]} (Kuukausi ${i + 1})on talvikuukausi`);
      break;

    case 4:
    case 5:
      console.log(`${kkNimet[i]} (Kuukausi ${i + 1}) on keväistä aikaa`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`${kkNimet[i]} (Kuukausi ${i + 1}) on kesällä`);
      break;
    case 9:
    case 10:
      console.log(`${kkNimet[i]} (Kuukausi ${i + 1}) aikana eletään syksyä`);
      break;
    case 11:
    case 12:
      console.log(`${kkNimet[i]} (Kuukausi ${i + 1}) on talvikuukausi`);
      break;
  }
}
