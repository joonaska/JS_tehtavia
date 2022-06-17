const luvut = [50, -20, 100, 10, -100, 10, 30];

// suodatellaan luvut taulukkoa
const suodatetut = luvut.filter((luku) => luku < 0 || (luku > 24 && luku < 51));
console.log(suodatetut);
