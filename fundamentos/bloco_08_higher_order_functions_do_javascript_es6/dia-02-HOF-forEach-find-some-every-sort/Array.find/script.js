/*const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
*/

//PARA FIXAR 1
/*
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (element) => {
  // Adiciona seu código aqui
  if (element % 3 === 0 && element % 5 === 0) {
    return element;
  }
}

const result = numbers.find(findDivisibleBy3And5);
console.log(result);
// console.log(findDivisibleBy3And5())
*/

//PARA FIXAR 2
/*
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((element) => {
    if (element.length === 5) {
      return element;
    }
  });
}

console.log(findNameWithFiveLetters());
*/

//PARA FIXAR 3
/*
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const findMusica = musicas.find((element) => {
    if (element.id === id) {
      return element.title;
    }
  });
  return findMusica;
}

// const result = musicas.find(findMusic);

console.log(findMusic('31031685'))
*/
