document.addEventListener("DOMContentLoaded", () => {
  //---- SEU CÓDIGO ABAIXO ----//
  // const texto = "Meu nome é Guilherme";
  // const idade = 34;
  // const verificador = true;
  // // const f = funcao();
  // const obj = {};
  // const array = [];
  // const nulo = null;
  // const indefinido = undefined;
  // const textoVazio = "";

  /* COMENTARIO DE MULTIPLAS LINHAS */
  // COMENTÁRIO DE UMA ÚNICA LINHA

  // const verificarTipo = typeof textoVazio;

  let b = 2;
  let h = 3;
  let A = b * h;

  //Operadores de Atribuição
  let contador = 0;
  // contador = contador + 1;
  // contador += 1;
  // contador++

  //operadores aritimeticos
  let soma = 2 + 2;
  let subtracao = 2 - 2;
  let multiplicacao = 2 * 2;
  let divisao = 2 / 2;
  let modulo = 3 % 2;

  let exprecaoMatematica = ((2 + 2) * 2) / 4;

  //operadores de comparacao
  let n1 = 40;
  let n2 = 12;
  // let comparar = n1 === n2;
  // let comparar = n1 >= n2;
  // let comparar = n1 === n2;
  let comparar = n1 != n2;

  //---- operadores lógicos ----//

  //---- AULA 4 - 29/08 ----//
  let numero1 = 2;
  let numero2 = 2;
  let numero3 = 4;
  let numero4 = 5;

  //---- LÓGICO E (&&)----//
  let verificador = numero1 === numero2 && numero3 < numero4;

  //---- LÓGICO OU (||)----//
  let verificador2 = numero1 !== numero2 || numero3 > numero4;

  //---- LÓGICO NEGAÇÃO NOT (||)----//
  let verificador3 = !(numero1 !== numero2 || numero3 > numero4);

  //---- emcremento e decremento ----//

  //---- EXEMPLO ++  incremento ----//
  let numero5 = 4;
  numero5++;

  //---- EXEMPLO -- decremento ----//
  let numero6 = 6;
  numero6--;

  //---- Pós incremento (variavel++) ele só realiza incremento após o ciclo ----//

  //----  Pré incremento (++variavel) ele realiza o incremento no inicio da função ----//

  //---- condcionais ----//

  let condicionais7 = 2;
  let condicionais8 = 2;
  let condicionais9 = 4;
  let condicionais10 = 5;

  let condicionaisResult =
    condicionais7 === condicionais8 && condicionais9 < condicionais10;

  if (false) {
    condicionais = "Entrei no verdadeiro";
  }

  let resposta = "";

  if (false) {
    resposta = "Entrei no verdadeiro";
  } else {
    resposta = "entrei no falso";
  }

  //---- exemplo ----//

  let nota1 = 2;
  let nota2 = 2;
  let nota3 = 2;
  let nota4 = 2;
  let media = (nota1 + nota2 + nota3 + nota4) / 4;

   // if (media >= 7) { // SE
  //   resposta = "APROVADO";
    
  // } else if (media >= 5 && media < 7) {
  //     resposta = "EM RECUPERAÇÃO";
  // } else {
  //   resposta = "REPROVADO";
  // }

  if (media >= 7) { // SE
    resposta = "APROVADO";
    
  } else if (media < 5) {
    resposta = "REPROVADO";
  } else {
    resposta = "EM RECUPERAÇÃO";
  }


  exibirResultadoNaTela(resposta);
});
