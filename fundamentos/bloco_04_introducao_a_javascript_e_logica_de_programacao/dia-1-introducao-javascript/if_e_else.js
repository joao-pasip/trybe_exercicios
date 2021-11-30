/*const nota = 60;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if ((nota < 80) && (nota >= 60)) {
    console.log ("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovada(o)");
}*/

/*ATIVIDADE DA COMIDA
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}*/

/*ATIVIDADE DO OPERADOR &&
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

//Resposta: Retorna false, porque com o operador && são necessários que todos os elementos/condições sejam verdadeiras.*/

/*Possibilidades de retorno True or False com o operador &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false*/

/*ATIVIDADE lista de compras com o operador &&
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;
const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);*/

/*ATIVIDADE IF, ELSE IF, ELSE e operador &&
const currentHour = 13;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);
} else if (currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
} else if (currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
} else if (currentHour >= 11) {
    message = "Hora do almoço!!!";
    console.log(message);
} else {
    message = "Hmmm, cheiro de café recém passado";
    console.log(message);
}*/

/*OPERADOR OR ||
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}*/

/*TABELA DO OPERADOR || (OR)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false*/

//VOLTAR NESSE EXEMPLO
let weekDay = "terça-feira";

switch (weekDay) {
    case "segunda-feira":
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
        break;
    case "terça-feira":
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
        break;
    case "quarta-feira":
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
        break;
    case  "quinta-feira":
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
        break;
    case "sexta-feira":
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
        break;
    case "sábado":
        console.log("FINALMENTE, descanso merecido UwU");
        break;
    case "domingo":
        console.log("FINALMENTE, descanso merecido UwU");
        break;
}


/*ESTRUTURA SWITCH/CASE
let estado = "aprovada";

switch (estado) {
    case "aprovada":
        console.log("APROVADA");
        break;

    case "lista":
        console.log("LISTA DE ESPERA");
        break;

    case "reprovada":
        console.log("NÃO FOI DESSA VEZ");
        break;
    
    default:
        console.log("VALOR NÃO IDENTIFICADO")
}*/