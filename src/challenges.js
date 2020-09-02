// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if(bool1 && bool2){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras;

  palavras = frase.split(' ');

  return palavras;
}

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  return `${palavras[palavras.length - 1]}, ${palavras[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const resultado = (wins * 3) + (ties * 1);

  return resultado;
}

// Desafio 6
function highestCount(vetor) {
  // seu código aqui
  let numero;
  let qtdRepeticao = 0;
  let maior = 0;

  let maiorRepeticao = 0;
  let indiceRepeticao;
  maior = vetor[0];
  for (let index = 0; index < vetor.length; index++) {
    numero = vetor[index];

    for (let indexNumero = 0; indexNumero < vetor.length; indexNumero++) {
      if((vetor[indexNumero] === numero) && (maior >= vetor[indexNumero])){
        qtdRepeticao++;
        maior = vetor[indexNumero];
      }
    }

    if(maiorRepeticao < qtdRepeticao){
      maiorRepeticao = qtdRepeticao;
      indiceRepeticao = index;
    }

    qtdRepeticao = 0;
  }

  return maiorRepeticao;

}

// Desafio 7
function catAndMouse(mouse,cat1, cat2) {
  // seu código aqui
  const msg = "os gatos trombam e o rato foge";

  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if(dist1 === dist2){
    return msg;
  }else if(dist1 > dist2){
    return 'cat2';
  }else{
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let resultado = [];
  let valor = '';

  for(let i=0; i < numeros.length; i += 1){

    if( (numeros[i] % 3 === 0) && (numeros[i] % 5 === 0)){
      valor = 'fizzBuzz';
    }else if(numeros[i] % 3 === 0){
      valor = 'fizz';
    }else if(numeros[i] % 5 === 0){
      valor = 'buzz';
    }else{
      valor = 'bug!'
    }

    resultado.push(valor);
    valor = '';
  }

  return resultado;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let encoded = '';

  for(let i=0; i<frase.length;i += 1){
    switch (frase[i]) {
      case 'a':
        encoded = encoded.concat('','1');
        break;
      case 'e':
        encoded = encoded.concat('','2');
        break;
      case 'i':
        encoded = encoded.concat('','3');
        break;
      case 'o':
        encoded = encoded.concat('','4');
        break;
      case 'u':
        encoded = encoded.concat('','5');
        break;
      default:
        encoded = encoded.concat('',frase[i]);
        break;
    }
  }

  return encoded;
}
function decode(frase) {
  // seu código aqui
  // seu código aqui
  let encoded = '';

  for(let i=0; i<frase.length;i += 1){
    switch (frase[i]) {
      case '1':
        encoded = encoded.concat('','a');
        break;
      case '2':
        encoded = encoded.concat('','e');
        break;
      case '3':
        encoded = encoded.concat('','i');
        break;
      case '4':
        encoded = encoded.concat('','o');
        break;
      case '5':
        encoded = encoded.concat('','u');
        break;
      default:
        encoded = encoded.concat('',frase[i]);
        break;
    }
  }

  return encoded;

}

// Desafio 10
function techList(vetor, name) {
  // seu código aqui

  const vetorOrdenado = vetor.sort();
  let resultado = [];

  if(vetor.length === 0){
    return "Vazio!";
  }

  for (const key in vetorOrdenado) {
    let objeto = {
      tech: vetorOrdenado[key],
      name: name
    }

    resultado.push(objeto);
  }

  return resultado;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  const msgErro = "não é possível gerar um número de telefone com esses valores";
  let numero;
  let qtdRepeticao = 0;
  let numeroValidado;

  if(numeros.length != 11){
    return "Array com tamanho incorreto.";
  }

  for(let i=0; i < numeros.length; i += 1){
    numero = numeros[i];

    if(numeros[i] < 0 || numeros[i] > 9){
      return msgErro;
    }

    for(let j=0; j < numeros.length; j += 1){
      if(numeros[j] === numero){
        qtdRepeticao++;
      }
    }

    if(qtdRepeticao >= 3){
      return msgErro;
    }
    qtdRepeticao = 0;
  }

  numeroValidado =
    "(" + String(numeros[0]) + String(numeros[1]) + ")" +
    String(numeros[2]) + String(numeros[3]) + String(numeros[4]) + String(numeros[5]) +
    "-" +
    String(numeros[6]) + String(numeros[7]) + String(numeros[8]) + String(numeros[9]);

  return numeroValidado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

console.log( generatePhoneNumber(numero) );

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
