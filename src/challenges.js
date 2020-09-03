// Desafio 1

const valueOneCompareTrue = false;
const valueTwoCompareTrue = true;

function compareTrue(testOne, testTwo) {
  return testOne && testTwo;
}

console.log(compareTrue(valueOneCompareTrue, valueTwoCompareTrue));

// Desafio 2

const base = 20;
const height = 30;

function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(base, height));

// Desafio 3

const splitPhrase = "go Trybe"

function splitSentence(split) {
  let aux = '';

  let stringForArray = [];
  for (i in split + 1) {   // + 1 para não cortar a última letra na condicional (último push)
    (split[i] == " ") || (split.length == i) ? (stringForArray.push(aux)) && (aux = '') : aux += split[i];
  }
  return stringForArray;
}

console.log(splitSentence(splitPhrase));

// Desafio 4

const arrayOfString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

console.log(concatName(arrayOfString));

// Desafio 5

const wins = 3;
const ties = 4;

function footballPoints(wins, ties) {
  let result = 0;
  for (let i = 1; i <= wins + ties; i += 1) { // i vai começar a contar a partir do primeiro ponto até a soma de todos(vitórias ou empates)
    wins >= i ? (result += 3) : result += 1; // enquanto o número de vitórias forem maior ou igual o contador ira somar 3 caso contrario 1(valor de empate)
  }
  return result
}

console.log(footballPoints(wins, ties));

// Desafio 6

const numbers = [9, 1, 2, 3, 9, 5, 7]

function highestCount(arraysOfNumbers) {
  let bigger = arraysOfNumbers[0];
  let result = 0;
  for (i in arraysOfNumbers) {
    if (arraysOfNumbers[i] > bigger) {
      bigger = arraysOfNumbers[i];
    }
  }
  for (i in arraysOfNumbers) {
    if (arraysOfNumbers[i] == bigger) {
      result += 1;
    }
  }
  return result;
}

  console.log(highestCount(numbers));

// Desafio 7

const mousePosition = -200;
const catOnePosition = -20;
const catTwoPostion = -350;

function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1){
    cat1 = mouse - cat1;
  } else {
    cat1 -= mouse;
  }
  if (mouse > cat2){
    cat2 = mouse - cat2;
  } else {
    cat2 -= mouse;
  }
  if (cat1 == cat2) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 < cat2) {
    return "cat1";
  } else {
    return "cat2";
  }
}

console.log(catAndMouse(mousePosition, catOnePosition, catTwoPostion));

// Desafio 8

const arrayForFizzBuzz = [2, 15, 7, 9, 45];

function fizzBuzz(numberList) {
  let resultArray = [];
  for (i in numberList) {
    if (numberList[i] % 5 == 0 && numberList[i] % 3 == 0) {
      resultArray.push('fizzBuzz');
    } else if (numberList[i] % 5 == 0) {
      resultArray.push('buzz');
    } else if (numberList[i] % 3 == 0) {
      resultArray.push('fizz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

console.log(fizzBuzz(arrayForFizzBuzz));

// Desafio 9

function encode(letters) {
  const lettersForNumbers = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let result = '';
  let cont = 0;
  
  for (key in letters) {
    cont = 0;
    for (k in lettersForNumbers) {
      if (letters[key].toLowerCase() == k) {
        result += lettersForNumbers[k];
        cont = 1;
      }
    }
    if(cont == 0) {
      result += letters[key];
    }
  }
  return result;
}
function decode(number) {
  const numbersForLetters = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
  };

  let result = '';
  let cont = 0;
  
  for (key in number) {
    cont = 0;
    for (k in numbersForLetters) {
      if (number[key] == k) {
        result += numbersForLetters[k];
        cont = 1;
      }
    }
    if(cont == 0) {
      result += letters[key];
    }
  }
  return result;

}

console.log(decode('11113221222214444'));
console.log(encode("LoL lOl"));


// Desafio 10

const nameTechArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
const name = "Lucas";

function techList(nameArray, name) {
  let emptyArray = [];

  if (nameArray.length == 0) {
    return 'Vazio!'
  } else {
    for (i in nameArray) {
      
      //https://stackoverflow.com/questions/1290131/how-to-create-an-array-of-object-literals-in-a-loop (RaYell)

      emptyArray.push({
        'tech': nameArray[i],
        'name': name
      });
    }
  }
  return emptyArray;
}

console.log(techList(nameTechArray, name));

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
