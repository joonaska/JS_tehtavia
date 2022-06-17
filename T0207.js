let joukkue = 'FC SääksVuoriFootballClub';
let etsiVali = joukkue.indexOf(' ');
let generoiLyhenne =
  joukkue.charAt(0) + joukkue.charAt(1) + joukkue.charAt(etsiVali + 1);

console.log(
  joukkue + ' ' + 'jalkapallo joukkueen lyhenne on' + ' ' + generoiLyhenne
);
