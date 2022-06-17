const haeMaa = async (x) => {
  const maatResponse = await fetch('https://restcountries.com/v2/all');
  if (!maatResponse.ok) {
    throw new Error('Virhe haettaessa maita');
  }
  const code = await maatResponse.json();
  const haku = x;
  const index = code.findIndex((x) => x.alpha2Code === haku);
  if (index === -1) {
    throw new Error('virhe haettaessa maata');
  }
  return code[index];
};
haeMaa('FI')
  .then((data) => console.log(data))
  .then((error) => console.log(error));
