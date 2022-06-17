const rivienLkm = 10;
const jataValista = 2;
let j = 0;
for (i = 1; j <= rivienLkm; i += jataValista) {
  for (j = 1; j <= i; j++) {
    process.stdout.write('*');
  }
  console.log();
}
