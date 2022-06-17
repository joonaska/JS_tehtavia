const onkoKaranteenissa = false; // korona
const tarvitseekoNeuvoja = true; // onnistuuko koodailu ilman neuvoja
// päivät tässä viikonpäiviä, esim. ma=1, ti=2, ke=3 jne
const tamaPaiva = 1; // mikä päivä tänään on
const ohjausPaiva = 3; // minä päivä on ohjaustunnit

if (tarvitseekoNeuvoja && tamaPaiva === ohjausPaiva && onkoKaranteenissa) {
  console.log('Osallistu ohjaustunneille luokassa');
} else if (
  tarvitseekoNeuvoja &&
  !onkoKaranteenissa &&
  tamaPaiva === ohjausPaiva
) {
  console.log('Osallistu tunneille Zoomissa');
} else if (
  tarvitseekoNeuvoja &&
  !onkoKaranteenissa &&
  tamaPaiva != ohjausPaiva
) {
  console.log('Olisiko Teams mitään?');
} else if (!tarvitseekoNeuvoja) {
  console.log('koodaile itsenäiesti kotona');
}
