const autoEiToimiva = {
  merkki: 'Rolls Royce',
  tulostaMerkki: function () {
    console.log(this.merkki);
  },
  aja: function () {
    setInterval(function () {
      // tässä receiver on kadonnut ja
      // this ei viittaa autoEiToimiva-objektiin
      console.log(this.merkki + ' ajaa eteenpäin ja kuuluu vain wroom wroom');
    }, 1000);
  },
};
autoEiToimiva.aja();
