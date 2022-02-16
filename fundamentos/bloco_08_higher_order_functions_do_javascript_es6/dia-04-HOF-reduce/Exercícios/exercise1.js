const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  // escreva seu código aqui
  const matrizArray = arrays.reduce((acumulador, element, index, array) => {
    const concat = acumulador.concat(element), [];
    return concat;
  }, 0)
}
