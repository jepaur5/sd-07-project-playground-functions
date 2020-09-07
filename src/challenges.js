// Começando...
// Desafio 1
compareTrue(true, false);

function compareTrue(firstValue, secondValue) {
  console.log("Desafio 1:");
  if (firstValue === true && secondValue === true) {
    console.log("As duas variáveis são verdadeiras!!!");
    return true;
  } else if (firstValue === false || secondValue === false) {
    let compare = false;
    console.log("Pelo menos uma das variáveis não é verdadeira!!!");
    return false;
  } else {
    console.log("Erro!!! Pelo menos uma das variáveis não são booleanas");
  }
}

// Desafio 2
calcArea(2, 3);

function calcArea(base, height) {
  console.log("");
  console.log("Desafio 2:");
  let calc = base * height / 2;
  console.log("A área do triângulo é " + calc);
  return calc;
}

// Desafio 3
splitSentence("Go Trybe")

function splitSentence(inputString) {
  console.log("");
  console.log("Desafio 3:");
  let arrayOfStrings = inputString.split([' ']);

  console.log("A string original é: " + inputString);
  console.log("Array: " + arrayOfStrings);
  return arrayOfStrings;
}

// Desafio 4 --- Não funcionou!!!
concatName(['Lucas','Cassiano','Ferraz','Paolillo']);

function concatName(names) {
  console.log("");
  console.log("Desafio 4:");

  let firstName = names[0];
  let lastName = names[names.length -1];

  console.log(lastName + ", " + firstName);
  return lastName, firstName;
}

// Desafio 5
footballPoints(10, 1);

function footballPoints(wins, ties) {
  console.log("");
  console.log("Desafio 5:");

  let points = 0;
  for ( i = 0; i < wins; i += 1 ) {
    points += 3;
  }
  for ( j = 0; j < ties; j += 1 ) {
    points += 1;
  }

  console.log("O time possui " + points + " pontos");
  return points;
}

// Desafio 6
highestCount([9, 1, 2, 3, 9, 5, 7]);

function highestCount(arrayOfNumbers) {
  console.log("");
  console.log("Desafio 6:");

  let highestNumber = 0;
  //-------Definindo o maior número-------//
  for ( i = 0; i < arrayOfNumbers.length - 1; i += 1 ) {
    firstNum = arrayOfNumbers[i];

    for ( j = 1; j < arrayOfNumbers.length; j += 1 ) {
      secondNum = arrayOfNumbers[j];
  
      if (highestNumber < firstNum && highestNumber < secondNum ) {
        if ( firstNum > secondNum ) {
          //---Se o primeiro número for maior---//
          highestNumber = firstNum;
        } else {
          //---Se o segundo número for maior---//
          highestNumber = secondNum;
        }
      }
    }
  }

  //-------Encontrando o maior número-------//
  let count = 0;

  for ( countIndex = 0; countIndex < arrayOfNumbers.length; countIndex += 1 ) {
    if ( arrayOfNumbers[countIndex] === highestNumber ) {
      count += 1;
    }
  }

  console.log("O maior número, " + highestNumber + ", se repetiu " + count + " vezes");
  return count;
}

// Desafio 7 --- Não funcionou!!!
catAndMouse([4, 2, 2])

function catAndMouse(animalsPosition) {
  console.log("");
  console.log("Desafio 7:");

  //-------Distância entre o rato e os gatos-------//
  let cat1 = animalsPosition[0] - animalsPosition[1];
  let cat2 = animalsPosition[0] - animalsPosition[2];

  if ( cat1 === cat2 ) {
    console.log("Os gatos se trombam e o rato foge");
    return ("Os gatos se trombam e o rato foge");
  } else if ( cat1 > cat2 ) {
    console.log("O gato 1 alcança o rato primeiro");
    return cat1;
  } else if ( cat1 < cat2 ) {
    console.log("O gato 2 alcança o rato primeiro");
    return cat2;
  }

}

// Desafio 8
fizzBuzz([2, 15, 7, 9, 45]);

function fizzBuzz(arrayOfNumbers2) {
  console.log("");
  console.log("Desafio 8:");

  resultArray = [];

  for ( i = 0; i < arrayOfNumbers2.length; i += 1 ){
    
    if (( arrayOfNumbers2[i] % 5 ) === 0 && ( arrayOfNumbers2[i] % 3 ) === 0 ) {
      resultArray.push("fizzbuzz");
    
    } else {
      if (( arrayOfNumbers2[i] % 3 ) === 0 ) {
        resultArray.push("fizz");
  
      } else if (( arrayOfNumbers2[i] % 5 ) === 0 ) {
        resultArray.push("buzz");
      
      } else if (( arrayOfNumbers2[i] % 5 || arrayOfNumbers2[i] % 3 ) != 0 ) {
        resultArray.push("bug!");
      }
    } 
  }

  console.log(resultArray);
  return resultArray;
}

// Desafio 9
encode("hi there!");

function encode(inputString) {

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
