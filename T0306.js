function kertoTaulu(x, y) {
  let taulu = [];
  for (let i = x; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      taulu.push(i * j);
    }
  }
  console.log(taulu);
}
kertoTaulu(3, 5);
