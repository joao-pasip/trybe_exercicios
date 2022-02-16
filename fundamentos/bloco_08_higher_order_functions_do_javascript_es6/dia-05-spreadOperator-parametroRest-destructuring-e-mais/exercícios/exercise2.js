// escreva sum abaixo (parâmetro rest)

const sum = (...numbers) => numbers.reduce(((acumulator, element) => acumulator + element),0);

console.log(sum(1,2,3,4,5));