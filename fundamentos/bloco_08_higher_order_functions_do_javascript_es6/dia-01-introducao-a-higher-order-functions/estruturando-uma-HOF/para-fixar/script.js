const acordar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (func) => func();
console.log(doingThings(acordar));
console.log(doingThings(cafe));
console.log(doingThings(dormir));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!