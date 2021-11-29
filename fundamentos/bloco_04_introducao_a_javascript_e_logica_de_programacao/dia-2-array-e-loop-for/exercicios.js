//ATIVIDADE 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i =  0; i < numbers.length; i+=1) {
    console.log(numbers[i]);
}
*/

//ATIVIDADE 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i+=1) {
    soma = soma + numbers[i];
}
    console.log(soma);
*/

//ATIVIDADE 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for (let i = 0; i < numbers.length; i+=1) {
    soma = soma + numbers[i];
    media = soma/(numbers.length);
}
    console.log(media);
*/

//ATIVIDADE 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for (let i = 0; i < numbers.length; i+=1) {
    soma = soma + numbers[i];
    media = soma/(numbers.length);
}
if (media > 20) {
        console.log('Valor maior que 20');
} else {
        console.log('Valor menor ou igual a 20');
}
*/

//ATIVIDADE 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
}
console.log(maior);
*/

//ATIVIDADE 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i]%2 === 1) {
        impar = impar +1;
    } else if (impar === 0) {
        console.log('Nenhum valor ímpar encontrado');
    }
}
console.log(impar);
*/

//ATIVIDADE 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 1000000000;

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] < menor && menor != 0) {
        menor = numbers[i];
    }
}
console.log(menor);
*/

//ATIVIDADE 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

//let soma = 0;
for (let i = 1; i <= 25; i+=1) {
//   soma = soma + i;
    console.log(i);
}
//console.log(soma);


//ATIVIDADE 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
/*
for (let i = 1; i <= 25; i+=1) {
    let divisao = i/2;
    console.log(divisao);
}
*/