const liikennevalot = ['aaa-111', 'bbb-222', 'ccc-333'];
console.log(liikennevalot);
//.shift poistaa ekan elementin sekä vaihtaa muiden indexit alaspäin
liikennevalot.shift();
console.log(liikennevalot);
//.push lisää taulukon jatkoksi
liikennevalot.push('ddd-444', 'eee-555');
console.log(liikennevalot);
//.splice lisää ja poistaa, eka parametri määrittää mihin kohtaan taulukkoa,
// toinen kuinka monta poistetaan, kolmas mitä lisätään
liikennevalot.splice(1, 2, 'fff-666');
console.log(liikennevalot);
