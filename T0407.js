function haeMaa(x) {
  return (
    fetch('https://restcountries.com/v2/all')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Virhe haettaessa tietoa');
        }
      })
      // haun tuloksesta näkyy että FI on alpha2codeissa,
      // joten haen function parametrilla alphoista oikeaa maata
      // selvitellään mihin indexiin tuo haku mätsää ja tulostetaan maantiedot
      .then((code) => {
        const haku = x;
        const index = code.findIndex((x) => x.alpha2Code === haku);
        if (index === -1) {
          throw new Error('virhe haettaessa maata');
        }
        return code[index];
      })
  );
}
// kokeilin myös muilla mailla
haeMaa('FI')
  .then((data) => console.log(data))
  .then((error) => console.log(error));
