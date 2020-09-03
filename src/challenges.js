// Desafio 1
function compareTrue(a, b) {
  // seu código aqui

  return a && b;
}

//console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

//console.log(calcArea(3, 10));

// Desafio 3
function splitSentence(name) {
  // seu código aqui

  let arr = name.split(" ");

  return arr;

  //OU PODEMOS USAR O ABAIXO O/ :) srsrsrsr
  /*  let arrayString = [];
  let palavraSeparada = "";
  for (let i in string) {
    if (string[i] != " ") {
      palavraSeparada += string[i];
    } else {
      arrayString.push(palavraSeparada);
      palavraSeparada = "";
    }
  }
  arrayString.push(palavraSeparada);
  return arrayString; */
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(names) {
  // seu código aqui
  return `${names[names.length - 1]}, ${names[0]}`;

  /*
  utilize como parâmetro "...param"
  let arr = [];
  arr.push(param.splice(param.length - 1, 1)[0]);
  arr.push(param.splice(0, 1)[0]);
  return arr.join(", ");
   */
}

//console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

//console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let contador = 1;

  //organizando a array e depois invertendo

  console.log(
    arr.sort(function (a, b) {
      //console.log(`o numero foi a ${a}`);
      //console.log(`o numero foi b ${b}`);
      //console.log(`a diferença foi ${b - a}`);
      return b - a;
    })
  );

  /* for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] === arr[i]) {
      contador++;
      console.log(arr[i]);
    }
  } */
  // ou podemos fazer um loop mais otimizado
  for (let i = 1; arr[i - 1] === arr[i]; i += 1) {
    contador++;
  }
  return contador;
}

//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat1Pos < cat2Pos) {
    return "cat1";
  } else if (cat1Pos > cat2Pos) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

//console.log(catAndMouse(5, 3, 10));

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let arrResult = [];
  for (let i in arr) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrResult.push(`fizzBuzz`);
    } else if (i % 3 === 0) {
      arrResult.push(`fizz`);
    } else if (i % 5 === 0) {
      arrResult.push(`buzz`);
    } else {
      arrResult.push(`bug!`);
    }
  }
  return arrResult;
}

//console.log(fizzBuzz([33, 12, 77, 4, 1]));

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
