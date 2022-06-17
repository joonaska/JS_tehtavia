function montaTervehdysta(lkm, tulostettava) {
  tulostettava =
    typeof tulostettava !== 'undefined' ? tulostettava : 'Terve maailma!' + ' ';
  return console.log(tulostettava.repeat(lkm));
}
montaTervehdysta(3);
