// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentense) {
  let splitted = sentense.split(" ");
  return splitted;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let lastString = "";
  let firstString = "";
  let lastCommaFirst = "";

  firstString = arrayDeStrings[0];
  lastString = arrayDeStrings[arrayDeStrings.length - 1];

  lastCommaFirst = lastString + ", " + firstString;

  return lastCommaFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3;
  let tiePoins = 1;
  let totalPoints = wins * winPoint + ties * tiePoins;
  return totalPoints;
}

// Desafio 6
function highestCount(numbersArray) {
  let higherNumber = 0;
  let timesRepeated = 0;
  for (let i = 0; i <= numbersArray.length; i += 1) {
    if (numbersArray[i] > higherNumber) {
      higherNumber = numbersArray[i];
    }
  }
  for (key in numbersArray) {
    if (numbersArray[key] == higherNumber) {
      timesRepeated += 1;
    }
  }
  return timesRepeated;
}

// Desafio 7
function catAndMouse(position) {
  let mouse = 0;
  let cat1 = 0;
  let cat2 = 0;
  for (let i = 0; i < position.length; i += 1) {
    mouse = position[0];
    cat1 = position[1];
    cat2 = position[2];
    if (mouse - cat1 < mouse - cat2) {
      return "cat1";
    } else if (mouse - cat1 > mouse - cat2) {
      return "cat2";
    } else if (cat1 == cat2) {
      return "os gatos trombam e o rato foge";
    }
  }
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
};
