/*
let linha = 5;
let coluna = 5;
let auxiliar = '';
for (let index = 1; index <= linha; index+=1) {
    auxiliar = auxiliar + '*';
    console.log(auxiliar);
}
*/

/*
    for (let contadora = 1; contadora <= coluna; contadora+=1) {
            console.log('*');
    }
    console.log('*');
}
*/

//ATIVIADE 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
/*
n = 5

*****
*****
*****
*****
*****
*/

// let linhas = 5;
// let colunas = linhas;
// let inputLine = '';

// for (let coluna = 1; coluna <= colunas; coluna +=1) {
//     inputLine = inputLine + '*';
// }
// for (let linha = 1; linha <= linhas; linha+=1) {
//     console.log(inputLine);
// }

//ATIVIDADE 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
/*
n = 5

*
**
***
****
*****
*/

// let base = 5;
// let auxiliar = '';

// for (let index = 0; index < base; index +=1) {
//     auxiliar = auxiliar + "*";
//     console.log(auxiliar);
// }


//ATIVIDADE 3- Agora inverta o lado do triângulo. Por exemplo:
/*
n = 5

    *
   **
  ***
 ****
*****
*/

/*
let auxiliar = '';
let n = 5;
let simbolo = '*';

for (let index = 1; index <=5; index +=1) {
    for (let i = 1; i <= n; i -=1)
    auxiliar = auxiliar + simbolo
    console.log(auxiliar);
}
*/

// console.log(' '+' '+' '+' '+'*');
// console.log(' '+' '+' '+'*'+'*');
// console.log(' '+' '+'*'+'*'+'*');
// console.log(' '+'*'+'*'+'*'+'*');
// console.log('*'+'*'+'*'+'*'+'*');

let repete = 5;
let espaco_vazio = ' ';
let asterisco = '*';
let auxiliar = '';

for(let index = 1; index <= repete; index+=1) {
    for (let i = 1; i<=repete; i+=1) {
        if (i<repete) {
            auxiliar=auxiliar + espaco_vazio;
        } else {
            auxiliar=auxiliar + asterisco;
        }
    }
    console.log(auxiliar);
}










/*
let auxiliar = '';
let n = 5;
let position = n;
let simbolo = '*'

for (let index = 1; index <= n; index += 1) {
    for (let i = 0; i <= n; i += 1) {
        if (i < position) {
            auxiliar = auxiliar + ' ';
        } else {
            auxiliar = auxiliar + simbolo;
        }
    }
    console.log(auxiliar);
    auxiliar = ''
    position -= 1;
}
*/