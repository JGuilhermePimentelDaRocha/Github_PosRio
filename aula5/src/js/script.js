//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// const nome = "Guilherme";
// const sobrenome = "Pimentel";
// const idade = 34;
// const nomeCompleto = nome + " " + sobrenome;
// const resultado =
//   "Nome Completo: " + " " + nomeCompleto + " | " + " " + "Idade:" + " " + idade;

let n1 = 12;
let n2 = 18;
let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let operador = "+";

// let resultado =
//   "Soma :" +
//   soma +
//   " | " +
//   "Subtração" +
//   divisao +
//   " | " +
//   " Multiplicação:  " +
//   multiplicacao +
//   " | " +
//   " Divisão:  " +
//   divisao;

// let id = 56;
// let statusLogin = "";

// switch (id) {
//   case 1:
//     statusLogin = "ADM";
//     break;
//   case 2:
//     statusLogin = "CONVIDADO";
//     break;
//   case 3:
//     statusLogin = "USUARIO";
//     break;

//   default:
//     statusLogin = "ERRO 404";
// }

// if (operador === "+") {
//   resultado = soma;

// } else if ( operador === "-"){
//   resultado = subtracao;

// } else if ( operador === "*") {
//   resultado = multiplicacao;

// } else if ( operador === "/") {
//   resultado = divisao;

// } else {
//   resultado = "OPERADOR INVÁLIDO"
// }

switch (operador) {
  case "+":
    resultado = soma;
    break;

  case "-":
    resultado = subtracao;
    break;

  case "*":
    resultado = multiplicacao;
    break;

  case "/":
    resultado = divisao;
    break;

  default:
    resultado = "OPERADOR INVÁLIDO";
   
}

//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

// ESTA VARIÁVEL A BAIXO EXIBE QUALQUER COISA QUE VOCÊ COLOQUE NELA
// NÃO MUDE JAMAIS O NOME DA VARIAVEL RESPOSTA
// MUDE SOMENTE O QUE TEM DEPOIS DO SINAL " = "
const resposta = operador;
