// Desafio 1

function compareTrue(arg1, arg2) {
    let test = true;
    if (arg1 && arg2)
        return test;
    else
        test = false;
    return test;
}

// Desafio 2
function calcArea(base, height) {
    let area = (height * base) / 2;
    return area;

}

// Desafio 3
function splitSentence() {
    // seu código aqui
}

// Desafio 4
function concatName(array) {
    let primeiro = array[0];
    let ultimo = array[array.length - 1];

    return `${primeiro}, ${ultimo}`
}

// Desafio 5
function footballPoints(wins, ties) {
    let pontos = (wins * 3) + ties;
    return pontos;
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
function fizzBuzz(array) {
    let arraySaida = [];
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0)
            arraySaida.push('fizzbuzz');

        else if (array[i] % 5 == 0 && array[i] % 3 != 0)
            arraySaida.push("buzz");

        else if (array[i] % 3 == 0 && array[i] % 5 != 0)
            arraySaida.push("fizz");

        else
            arraySaida.push("bug!");
    }
    return arraySaida;

}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

// Desafio 10
function techList(list) {

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