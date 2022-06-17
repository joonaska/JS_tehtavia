const Auto = {
  tulostaMerkki: function () {
    console.log(this.merkki);
  },
  aja: function () {
    setInterval(() => {
      console.log(this.merkki + ' ajaa eteenpäin ja kuuluu vain wroom wroom');
    }, 1000);
  },
};
// luodaan kiesit object creatella
const rr = Object.create(Auto);
// merkki on asetettu rr:ään muttei "Autoon"
rr.merkki = 'Rolls Royce';

const lada = Object.create(Auto);
lada.merkki = 'Lada';
// ajellaan tulosteet läpi

lada.tulostaMerkki();
rr.tulostaMerkki();
lada.aja();
rr.aja();
