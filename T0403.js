const tayttyykoLupaus = (x) =>
  new Promise((resolve, reject) =>
    x === true
      ? setTimeout(() => {
          resolve('Kyllä!');
        }, 3000)
      : reject(new Error('Ei Onnistunut'))
  );

tayttyykoLupaus(true).then((tulos) => console.log(tulos));
// catchella error
tayttyykoLupaus(false).catch((error) => console.log(error.message));

//tayttyykoLupaus(false).then((error) => console.log(error.message));
