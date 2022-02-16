//EXEMPLO COM FOR
/*
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

const numbers = [32, 15, 3, 2, -5, 56, 10];
*/

//EXEMPLO COM REDUCE
/*
const numbers = [32, 15, 3, 2, -5, 56, 10];
const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
*/

//REDUCE
/*EXEMPLO
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15
*/

//REDUCE
/*
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
*/

//REDUCE - MAIOR VALOR DO ARRAY
// const numbers = [50, 85, -30, 3, 15];

/*USANDO O FOR
let bigNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > bigNumber) {
    bigNumber = numbers[index];
    // return bigNumber;
  }
}
console.log(bigNumber);
*/

/*USANDO REDUCE
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const numberBig = numbers.reduce(getBigger, 0);

console.log(numberBig);
*/

//TODOS NÚMEROS PARES DO ARRAY
/*USANDO FILTER E REDUCE
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const catchIsEven = numbers.filter((element) => {
  if (element % 2 === 0) {
    return element;
  }
});

const sumIsEven = catchIsEven.reduce((acumulador, elemento) => {
  return acumulador + elemento;
});

console.log(sumIsEven);
*/

/*USANDO APENAS REDUCE
//const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const callBack = (acumulador, element) => (
//   (element % 2 === 0) ? acumulador + element : acumulador
// );
// const sumIsEven = (array) => array.reduce(callBack, 0);
//console.log(sumIsEven(numbers));

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
  
const sumIsEven = numbers.reduce((acumulador, element) => (
  (element % 2 === 0) ? acumulador + element : acumulador
));

console.log(sumIsEven);
*/

//EM QUAL MATÉRIA O ESTUDANTE FOI MELHOR
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// const melhorMateria = estudantes.reduce((acumulador, element, index, array) => {
//   if (element.materias.nota > acumulador) {
//     return element.materias.nota;
//   } else {
//     return acumulador;
//   }
// });

// console.log(melhorMateria);
// const alunoMelhorMateria = melhorMateria.map((element, index, array) => {

// })

/*
const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));
*/



const obterMelhorMateria = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const informaMelhor = (alunos) => alunos.map((aluno) => ({
    name: aluno.nome,
    materia: aluno.materias.reduce(obterMelhorMateria).name}));

console.log(informaMelhor(estudantes));