/*const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
*/


/*let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const testingScope = escopo => (escopo === true) ? `${ifScope} ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`;

console.log(testingScope(true));
*/

//PARTE 1
/*const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
*/

//PARTE 2

/*const fatorial = (num) => {
  let aux = 1;
  for (let index = 2; index <= num; index += 1) {
    aux = aux * index;
  }
  return aux;
}

console.log(fatorial(1));
*/

const longesWord = (frase) => {
  if (frase.length > 0) {
    let wordArray = frase.split(' ');
    let maxLength = 0;
    let result = '';
    for (const word of wordArray) {
      if (word.length > maxLength) {
        maxLength = word.length;
        result = word;
      }
    }
    return result;
  }
}

console.log(longesWord("Antonio foi no banheiro e não sabemos o que aconteceu"));