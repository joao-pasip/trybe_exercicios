// function palindromo(palavra) {
  // let reverse = '';
  // for (let index = palavra.length-1; index >= 0; index -=1) {
  //   reverse += palavra[index];
  // }
  // console.log(reverse);
  // console.log(palavra);
  // if (reverse === palavra){
  //   return true;
  // } else {
  //   return false;
  // }
  // console.log(reverse);
  // }

// let palavra = "pato";
// let teste = palavra.split('').reverse().join('');
// console.log(teste);


// ATIVIDADE PALINDROMO
function palindromo(palavra) {
  let reverse = palavra.split('').reverse().join('');
  if (reverse === palavra) {
    return true;
  } else {
    return false;
  }
}
console.log((palindromo('arara')));







