let luku = 110;
const pieni = 10;
const suuri = 100;

if (luku % 2 === 0 && luku < pieni) {
  console.log(`${luku} on pieni ja parillinen`);
} else if (luku % 2 === 0 && luku > suuri) {
  console.log(`${luku} on suurtakin suurempi ja parillinen`);
} else if (luku % 2 != 0 && luku < pieni) {
  console.log(`${luku} on pieni ja pariton`);
} else if (luku % 2 != 0 && luku > suuri) {
  console.log(`${luku} on suurtakin suurempi ja pariton`);
} else if (luku > pieni && luku < suuri && luku % 2 === 0) {
  console.log(`${luku} on jostain pienen ja suuren väliltä sekä parillinen`);
} else if (luku > pieni && luku < suuri && luku % 2 != 0) {
  console.log(`${luku} on jostain pienen ja suuren väliltä sekä pariton`);
}
