/*
kertoTaulu = ’ ’;
FOR kerroin = 1; kerroin <= 10; kerroin +1
	tulosta kerroin
	kertoTaulu rivin vaihto
	FOR kerroin2 = 1; kerroin2 <=10; kerroin2 + 1
		kertoTaulu += väli + kerroin * kerroin2  + väli

  tulosta kertoTaulu


*/
kertoTaulu = ' ';
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    process.stdout.write(i * j + ' ');
  }
  process.stdout.write('\n');
}
console.log(kertoTaulu);
