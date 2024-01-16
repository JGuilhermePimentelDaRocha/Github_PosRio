//--- EXERCICIO 01 ---//
// -- CASO O NOME EXISTA NO ARRAY EXIBA UM CONSOLE.LOG (BUSCAR) SENÃO EXIBA NA TELA "O NOME NÃO EXISTE NO ARRAY"

const palavras = ["CARRO", "BALÃO", "RODA", "PEDRA"];
const buscar = "roda".toUpperCase();

if (palavras.indexOf(buscar) !== -1) {
  //  UTILIZE O METODO DE ARRAY INDEX OF
  console.log(buscar);
} else {
  console.log("Nome Inexistente");
}
