// funções Anonimas //

/// EXEMPLO ///

// (function (parametros){
// //--codigo da função
// })()

//////

(function (parametros) {
  console.log("exibir" + parametros);
})("Teste de Parametros");

///////// DENTRO DE UMA CONST //////

const exibirTeste = function (parametros) {
  console.log("exibir" + parametros);
};
exibirTeste("Teste de Parametros");
