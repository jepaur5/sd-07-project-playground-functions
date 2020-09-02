// Desafio 1
function compareTrue(val1, val2) {
  if (val1 && val2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let copia = frase;
  let partida = [];
  let indice = 0;

  for (let i = 0; i < copia.length; i += 1) {
    if (i == 0) {
      partida[indice] = copia[i];
    } else if (copia[i] !== " ") {
      partida[indice] = partida[indice] + copia[i];
    } else {
      indice += 1;
      i += 1;
      partida[indice] = copia[i];
    }
  }
  return partida;
}

// Desafio 4
function concatName(array) {
  let saida;
  saida = array[array.length - 1] + ", " + array[0];
  return saida;
}
//console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let i in array) {
    if (array[i] == maior) {
      contador += 1;
    }
  }
  return contador;
}
//console.log(highestCount([9, 1, 2, 3, 9, 9, 7]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return ("cat1");
  } else if (dist2 < dist1) {
    return ("cat2");
  } else {
    return "os gatos trombam e o rato foge";
  }
  // seu código aqui
}
console.log(catAndMouse(3, 0, 9));

// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  for (let i in array) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      resposta.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      resposta.push("fizz");
    } else if (array[i] % 5 == 0) {
      resposta.push("buzz");
    } else {
      resposta.push("bug!");
    }
  }
  return resposta;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(entrada) {
  let frase = entrada;
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] == "a") {
      frase[i] = "1";
    } else if (frase[i] == "e") {
      frase[i] = 2;
    } else if (frase[i] == "i") {
      frase[i] = "3";
    } else if (frase[i] == "o") {
      frase[i] = "4";
    } else if (frase[i] == "u") {
      frase[i] = "5";
    }
  }

  return frase;

  // seu código aqui
}
console.log(encode("Hi There"));

function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, name) {
  if(array.length==0){
    return ("Vazio!")
  }
  let saida = {};
  let emOrdem = array.sort(); //ordena o array da entrada
  let lista = [];
  let objeto = {};

  for (let i in emOrdem) {
    saida.tech = emOrdem[i];
    saida.name = name;
    lista[i] = { ...saida };
    //console.log(lista);
  }

  return lista;
  // seu código aqui
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Fernando"));

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
