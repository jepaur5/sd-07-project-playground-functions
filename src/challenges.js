// Desafio 1
function compareTrue(first, second) {
  // seu código aqui
  return first && second ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(" ");
}

// Desafio 4
function concatName(arraysname) {
  // seu código aqui
  const firstPos = arraysname[0];
  const finalPos = arraysname[arraysname.length - 1];
  const final = finalPos + ', ' + firstPos;
  return final;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
