//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

let peso = 54;
let altura = 1.68;
let imc = peso / (altura * altura);
let result = "";

if (imc < 18.5) {
  result = "Abaixo do peso";
} else if (imc > 18.5 && imc <= 24.9) {
  result = "Peso Normal";
} else if (imc > 25 && imc <= 29.9) {
  result = "Sobrepeso";
} else if (imc > 30 && imc <= 34.9) {
  result = "Obesidade 1";
} else if (imc > 35 && imc <= 39.9) {
  result = "Obesidade 1";
} else {
  result = "Obesidade 2 ";
}
//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

// ESTA VARIÁVEL A BAIXO EXIBE QUALQUER COISA QUE VOCÊ COLOQUE NELA
// NÃO MUDE JAMAIS O NOME DA VARIAVEL RESPOSTA
// MUDE SOMENTE O QUE TEM DEPOIS DO SINAL " = "
const resposta = "Seu IMC é : " + imc + " Está com : " + result;
