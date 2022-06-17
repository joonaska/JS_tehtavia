fetch('https://jsonplaceholder.typicode.com/posts/14')
  // tarkistetaan että nouto on ok ja response tulee muutoin error
  .then((response) => {
    if (!response.ok) {
      throw new Error('Virhe haettaessa posteja');
    } else {
      return response.json();
    }
  })
  // etsitään postin 14 kirjoittaja.
  .then((posti14) => {
    const kirjoittaja = posti14.userId;
    return fetch(`https://jsonplaceholder.typicode.com/users/${kirjoittaja}`);
  })
  // tarkistetaan uusi fetchi
  .then((response) => {
    if (!response.ok) {
      throw new Error('Virhe haettaessa kirjoittajaa');
    } else {
      return response.json();
    }
  })

  // tulostellaan halutut tiedot
  .then((data) => console.log(data.name, data.phone))
  .catch((error) => console.log(error.message));
