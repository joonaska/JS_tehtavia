function onkoKarkausVuosi(vuosi) {
  if ((vuosi % 4 == 0 && vuosi % 100 != 0) || vuosi % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(onkoKarkausVuosi(1998));
console.log(onkoKarkausVuosi(2012));
console.log(onkoKarkausVuosi(2001));
