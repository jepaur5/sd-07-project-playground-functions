// Desafio 1
function compareTrue(v1, v2) {
  let result;
  if (v1 == true && v2 == true) {
    result = true;
  } else {
    result = false
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(texto) {
  let result = texto.split(" ");
  return result;
}

// Desafio 4
function concatName(names) {
  let ultimo = names[names.length-1];
  let primeiro = names[0];
  let result = `${ultimo}, ${primeiro}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiesPoints = ties;
  let total = victoryPoints + tiesPoints;

  return total;
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  function ordemCrescente(a, b) {
    return a - b;
  }
  arrayTeste = numeros.sort(ordemCrescente)
  let maiorNumero = arrayTeste[arrayTeste.length-1]
  arrayTeste.forEach(element => {
    if (maiorNumero == element) {
      contador += 1
    }
  });

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  let frase;
  if (distanceCat1 < distanceCat2) {
    frase = cat1;
  } else if (distanceCat1 > distanceCat2) {
    frase = cat2;
  } else {
    frase = "os gatos trombam e o rato foge";
  }
  return frase;
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
