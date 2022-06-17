// luodaan auto-konstruktori
function Auto(merkki) {
  this.merkki = merkki;
}
// luodaan prototyypit
Auto.prototype.tulostaMerkki = function () {
  return this.merkki;
};
Auto.prototype.aja = function () {
  setInterval(() => {
    console.log(this.merkki + ' ajaa eteenpäin ja kuuluu vain wroom wroom');
  }, 1000);
};
// luodaan uudet autot ja kokeillaan niiden toiminnat
let rr = new Auto('Rolls Royce');
console.log(rr.tulostaMerkki());
rr.aja();
let lada = new Auto('Lada');
console.log(lada.tulostaMerkki());
lada.aja();
