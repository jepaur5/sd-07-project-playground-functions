
// Desafio 1
function compareTrue(a, b) {
  let result = (a === true && b === true) ? true : false;
  return (result)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return (array);
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let string = (`${lastItem}, ${firstItem}`);
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins *= 3) + (ties *= 1);
  return (pontos);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = '';
  let numeroRepeat = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      maiorNumero = array[i];
    }
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (maiorNumero === array[j]) {
      numeroRepeat += 1;
    }
  }
  return (numeroRepeat);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let situation1 = '';
let situation2 = '';
if (cat1 - mouse < 0) {
    situation1 = -1 * (cat1 - mouse);
}
else {
    situation1 = cat1 - mouse;
}
if (cat2 - mouse < 0) {
    situation2 = -1 * (cat2 - mouse);
}
else {
    situation2 = cat2 - mouse;
}
if (situation1 < situation2) {
    resultado = 'cat1';
} else if (situation2 < situation1) {
    resultado = 'cat2';
}
else {
    resultado = 'os gatos trombam e o rato foge';
}
return(resultado)
}


// Desafio 8
function fizzBuzz(array) {
  let string = [];
for (let i = 0; i < array.length; i += 1)
if (array[i] % 3 != 0 && array[i] % 5 != 0) {
        string.push('bug!');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        string.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
        string.push('fizz');
    } else if (array[i] % 5 === 0) {
        string.push('buzz');
    }
    return (string);
    console.log(string);
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
