// -- Functions --------------------------------//
function primeiraFuncao() {
  console.log("hello wordpress");
}
//--- invocar a função para apercer no codigo ---//
primeiraFuncao();

// -- argumentos na função --//
function dizerNomeFuncao(nome) {
  console.log(" o nome é: " + nome);
}

//-- Posso reaproveitar codigo(função) o para varios paramentos -- //
dizerNomeFuncao("GUI");
dizerNomeFuncao("JOSE");

//-- Posso passar como variavel --//
let nomeDoBancodeDados = "João";

dizerNomeFuncao(nomeDoBancodeDados);

// return - armazena e recebe um valor de volta de uma função-- //
function soma(a, b) {
  let somas = a + b;
  return somas;
}

let somaUm = soma(2, 5);

console.log(somaUm);
