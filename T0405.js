// noudetaan kaikki postit
fetch('https://jsonplaceholder.typicode.com/posts')
  // tarkistetaan että nouto on ok ja response tulee muutoin error
  .then((response) => {
    if (!response.ok) {
      throw new Error('Virhe käsiteltäessä tietoja');
    } else {
      return response.json();
    }
  })
  //tulosta on edellisen promisen tuotos.
  // tulostetaan jokaisen postauksen title eli otsikko foreachilla.
  .then((tulosta) => {
    tulosta.forEach((a) => {
      console.log(a.title);
    });
  })
  // errori nappastaan kiinni jos jossain sellainen ilmeneee
  .catch((error) => console.log(error.message));
