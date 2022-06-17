function onkoJaollinenKolmella(luku) {
  if (luku % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

let tulostus = onkoJaollinenKolmella(3);
console.log(tulostus);
console.log(onkoJaollinenKolmella(4));
