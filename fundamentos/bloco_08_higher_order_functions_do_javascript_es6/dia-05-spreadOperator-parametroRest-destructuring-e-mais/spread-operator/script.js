// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Acerola', 'Carambola', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruits = [...fruit, ...additional];
  return fruits;
};

console.log(fruitSalad(specialFruit, additionalItens));