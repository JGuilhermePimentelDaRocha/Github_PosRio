// const somar  = function (n1,n2){
//   return n1 + n2;
// }
// const subtrair  = function (n1,n2){
//   return n1 - n2;
// }
// const multiplicar= function (n1,n2){
//   return n1 * n2;
// }
// const dividir  = function (n1,n2){
//   return n1 / n2;
// }

// Arrow functions //

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

console.log(somar(1, 2));
console.log(subtrair(4, 2));
console.log(multiplicar(2, 20));
console.log(dividir(40, 5));

// exemplo 2 //

//normal //

// const exibirNome = (nome) => {
//   return "Meu nome é " + nome;
// };

// arrow function //

const exibirNome = (nome) => nome;

console.log(exibirNome("Guilherme"));
