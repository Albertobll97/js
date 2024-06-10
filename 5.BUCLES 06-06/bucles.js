let counter = 0;
const printValue = () => {
  if (counter < 5) {
    console.log(counter);
  }
  counter++;
};
printValue();
printValue();
printValue();
printValue();
printValue();
printValue();
printValue();
console.log('-----------------');
for (let counter = 0; counter < 5; counter++) {
  console.log(counter);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    numbers [0]; 
    numbers [1]; 
    numbers [2]; 
    numbers [3]; 
    numbers [4];
    for (let counter = 0; counter < numbers.length; counter++) {
    console. log(numbers [counter]);
    }
    for (const number of numbers) {
    console.log (number);
    }

    const word = 'Tatiana';
for (const letter of word) {
console. log(letter);}
// # Ejercicios

// ## Bucles Determinados

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.
const countdown = start => {
  for (let counter = start; counter >= 0; counter--) {
    console.log(counter);
  }
};
countdown(10);

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumNumbers = numbers => {
  let total = 0;
  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter];
  }
  console.log(total);
};
sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//   4 x 0 = 0
//   4 x 1 = 4
//   4 x 2 = 8
//   4 x 3 = 12
//   4 x 4 = 16
//   4 x 5 = 20
//   4 x 6 = 24
//   4 x 7 = 28
//   4 x 8 = 32
//   4 x 9 = 36
//   4 x 10 = 40

const multiplyTable = number => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};
multiplyTable(9);

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//   4 x 10 = 40
//   4 x 9 = 36
//   4 x 8 = 32
//   4 x 7 = 28
//   4 x 6 = 24
//   4 x 5 = 20
//   4 x 4 = 16
//   4 x 3 = 12
//   4 x 2 = 8
//   4 x 1 = 4
//   4 x 0 = 0

const multiplyTablereverse = number => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};
multiplyTablereverse(9);

// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....

const yearAndAge = (year, age) => {
  const birthday = year - age;
  console.log(`naciste en el año ${birthday}`);

  // for(let counter = 1; counter <= age ;counter++){
  //     console.log(`en el año ${birthday + counter} cumpliste ${counter}`)
  // }

  for (let counter = birthday + 1; counter <= year; counter++) {
    if (counter === birthday + 1) {
      console.log(`en el año ${counter} cumpliste ${counter - birthday} año`);
    } else {
      console.log(`en el año ${counter} cumpliste ${counter - birthday} años`);
    }
  }
};
yearAndAge(2024, 24);

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

//Camino largo
const printOnlyEven = (numberA, numberB) =>{
    
    if (numberA < numberB) {
        for (let counter = numberA; counter <= numberB; counter++) {
        if (counter % 2 === 0) {
        console. log (counter);
    }
}}else {
        for (let counter = numberB; counter <= numberA; counter++) {
        if (counter % 2 ===0){
        console. log(counter)}}
}}
printOnlyEven(2,12)

//Camino corto
const printOnlyEven2 = (numberA, numberB) =>{
    const start = Math.min(numberA,numberB)
    const end = Math.max(numberA,numberB)
    for(let counter = start; counter <= end; counter++){
        if(counter % 2 ===0){
            console.log(counter)
        }
    }
}
printOnlyEven2(2,12)

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

// - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//   a: 3,
//   e: 3,
//   i: 1,
//   o: 1,
//   u: 1

// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
