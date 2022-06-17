const haeKayttajanMaadata = async () => {
  // haetaan eka kayttajan tiedot maasta
  const maakoodiResponse = await fetch('https://api.country.is');
  if (!maakoodiResponse.ok) {
    throw new Error('Virhe haettaessa IP:tä');
  }

  const code = await maakoodiResponse.json();
  //otetaan palautuneesta jsonista country talteen eli "FI"
  const maa = code.country;
  // haetaan lista maista
  const maatResponse = await fetch('https://restcountries.com/v2/all');
  if (!maatResponse.ok) {
    throw new Error('Virhe haettaessa maita');
  }
  const maatiedot = await maatResponse.json();
  // haetaan indexi missä alphacodena on se aiemmin haettu country eli "FI"
  const index = maatiedot.findIndex((x) => x.alpha2Code === maa);
  if (index === -1) {
    throw new Error('virhe haettaessa maatietoja');
  }
  return maatiedot[index];
};
haeKayttajanMaadata()
  .then((data) => console.log(data))
  .then((error) => console.log(error));
