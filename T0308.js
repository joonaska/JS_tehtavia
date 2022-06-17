function laskeMontaYhteen(...nums) {
  let sum = 0;

  // ...nums tekee yksittäisistä parametreista taulukon.
  // foreachilla käydään taulukko läpi
  // ja lisätään jokainen annettu numero summaan
  nums.forEach(function (x) {
    sum += x;
  });
  return sum;
}
console.log(laskeMontaYhteen(10, 20, 30, 40));
