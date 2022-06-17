const ekaPromise = new Promise((resolve, reject) => {
  let ongelma;
  setTimeout(() => {
    ongelma = Math.round(Math.random());
    if (ongelma === 0) {
      resolve('dataa');
    } else {
      reject(new Error('virhe'));
    }
  }, 2000);
});
ekaPromise.then(
  (value) => console.log(value),
  (error) => console.log(error.message)
);
//.finally metodi kutsutaan kun promise on ratkennut
// joko fulfilled tai rejected
ekaPromise.finally(() => console.log('Valmista tuli!'));
