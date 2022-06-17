const rivienLkm = 4;
let j = 0;
for (i = 1; j <= rivienLkm; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write('*');
  }
  console.log();
}
