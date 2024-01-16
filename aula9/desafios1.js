//-- EXERCICIO 1 --//
//---1. Crie um array com 10 números e imprima seus indices utilizando um laço for in .

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const indice in numeros) {
  console.log(indice);
}

//-- EXERCICIO 2 --//
//---2. Crie um array com 10 nomes e imprima cada um deles utilizando um laço for of .

const nomes = [
  "Alice",
  "Bob",
  "Charlie",
  "Dave",
  "Eve",
  "Frank",
  "Gary",
  "Heather",
  "Igor",
  "Jill",
];

for (const item of nomes) {
  console.log(item);
}

//-- EXERCICIO 3 --//
//---3. Crie um array com 10 números e, utilizando um laço for of , calcule a soma de todos os elementos do array

const numeross = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;
for (const numero in numeross) {
  soma += numeross[numero];
}
console.log(soma);

//-- EXERCICIO 5 --//
// ---5. Crie um array com 10 nomes e, utilizando um laço for of , imprima cada nome em uma linha diferente.

const nomess = [
  "Alice",
  "Bob",
  "Charlie",
  "Dave",
  "Eve",
  "Frank",
  "Gary",
  "Heather",
  "Igor",
  "Jill",
];

for (const linha of nomess) {
  console.log(linha);
}

//-- EXERCICIO 6 --//
// ---6. Crie um array com 10 números e, utilizando um laço for of , imprima todos os úmeros maiores que 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maior = 5;

for (maiores of numbers) {
  maiores > maior;
}
console.log(maior);
