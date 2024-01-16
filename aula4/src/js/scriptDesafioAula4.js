document.addEventListener("DOMContentLoaded", () => {
  //---- DESAFIO AULA 4  ----//

  function resposta(texto) {
    //---- EXIBIR RESULTADO NA TELA ----//
    exibirResultadoNaTela(texto);
  }
  //---- SOLICITA A IDADE ----//
  let idade = parseInt(prompt("Digite sua idade"));

  if (idade >= 18) {
    resposta("Você pode dirigir e votar.");
  } else if (idade >= 16 && idade < 18) {
    resposta("Você ainda pode votar mais não pode dirigir.");
  } else if (idade <= 16) {
    resposta("Você não pode votar e não pode dirigir.");
  }
});
