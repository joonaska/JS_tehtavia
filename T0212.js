let celcius = 10;
const konversioFahrenheitiin = false;
const konversioKelviniin = true;

let celciusToFahrenheit = celcius * 1.8 + 32;
let celciusToKelvin = celcius + 273.15;

// //console.log(
//   `${celcius} celcius-astetta on ${celciusToFahrenheit} fahrenheit-astetta`
// );

if (konversioFahrenheitiin && !konversioKelviniin) {
  console.log(
    `${celcius} celcius-astetta on ${celciusToFahrenheit} fahrenheit-astetta`
  );
} else if (!konversioFahrenheitiin && konversioKelviniin) {
  console.log(
    `${celcius} celcius-astetta on ${celciusToKelvin} Kelvin-astetta`
  );
} else if (!konversioKelviniin && !konversioFahrenheitiin) {
  console.log('Ei mitään konvertoitavaa');
}
