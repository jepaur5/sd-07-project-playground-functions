// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
      return(true)
  } else {
      return(false)
  }

}

// Desafio 2
function calcArea(base, height) {
  let aux = base*height/ 2
    return(aux)
}

// Desafio 3
function splitSentence(trybe) {
  let resultado = trybe.split(" ");
  return(resultado)
}

// Desafio 4
function concatName(arrDeString) {
  let first = [...arrDeString].shift();
  let last = [...arrDeString].pop();
  let concatLastFirst = last + ", " + first; 
  return(concatLastFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
let vit = wins * 3;
let emp = ties * 1;
let points = vit + emp;
return(points)
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0 
  let max = Math.max(...arrayNumbers);

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] == max) {
      count = count+1
      }
}
return(count) 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let scat1 = Math.abs(cat1 - mouse);
  let scat2 = Math.abs(cat2 - mouse); 
  
  if (scat1 < scat2) {
      return("cat1")
  } else if (scat2 < scat1) {
      return("cat2")
  } else {
      return("os gatos trombam e o rato foge")
  }
}


// Desafio 8
function fizzBuzz(numeros) {
let retorno = []
 for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] % 3 === 0 && numeros[i] % 5 !== 0) {  
    retorno.push("fizz")
  } else if (numeros[i] % 5 === 0 && numeros[i] % 3 !== 0) {
    retorno.push("buzz")
  } else if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
    retorno.push("fizzBuzz")
  } else {
    retorno.push("bug!")
  }
} 
return(retorno);
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
