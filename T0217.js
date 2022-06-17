let kuukausi = 12;

for (let i = 1; i <= kuukausi; i++) {
  switch (i) {
    case 1:
    case 2:
    case 3:
      console.log(`Kuukausi ${i} on talvikuukausi`);
      break;
    case 4:
    case 5:
      console.log(`Kuukausi ${i} on keväistä aikaa`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`Kuukausi ${i} on kesällä`);
      break;
    case 9:
    case 10:
      console.log(`Kuukausi ${i} aikana eletään syksyä`);
      break;
    case 11:
    case 12:
      console.log(`Kuukausi ${i} on talvikuukausi`);
      break;
  }
}
//let kuukausi = Math.floor(Math.random() * (12 + 1 - 1)) + 1;
// let kuukausi = 12;
// for (let i = 1; i <= kuukausi; i++) {
//   if (i > 0 && i <= 3) {
//     console.log(`Kuukausi ${i} on talvikuukausi`);
//   } else if (i > 3 && i < 6) {
//     console.log(`Kuukausi ${i} on keväistä aikaa`);
//   } else if (i >= 6 && i < 9) {
//     console.log(`Kuukausi ${i} on kesällä`);
//   } else if (i >= 9 && i < 11) {
//     console.log(`Kuukausi ${i} aikana eletään syksyä`);
//   } else if (i > 10 && i <= 12) {
//     console.log(`Kuukausi ${i} on talvikuukausi`);
//   }
// }
