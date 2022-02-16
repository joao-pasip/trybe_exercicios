//Passar funções como argumento para outras funções:
/*const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);
*/

//Retornar uma função de outra função:
const sumFixAmount = amount => number => amount * number;


const initialSum = sumFixAmount(10)
console.log(initialSum(5));
console.log(sumFixAmount);
