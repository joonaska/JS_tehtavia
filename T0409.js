const haeIPmaakoodi = async () => {
  const maakoodiResponse = await fetch('https://api.country.is');
  if (!maakoodiResponse.ok) {
    throw new Error('Virhe haettaessa ip:tä');
  }

  const koodi = await maakoodiResponse.json();
  console.log(koodi.ip);
};
haeIPmaakoodi();
