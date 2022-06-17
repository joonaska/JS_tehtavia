const lupaus = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Kyllä lähtee!');
  }, 3000);
});
lupaus.then((tulos) => console.log(tulos));
