//-- DESTRUTURAÇÃO --//

// ---Exercício 1:
// ---Pergunta: Desestruture o array [1, 2, 3] em três variáveis chamadas a , b e c .

const numeros = [1, 2, 3];
const [a, b, c] = numeros;
console.log("Variável A agora é : " + a);
console.log("Variável B agora é : " + b);
console.log("Variável C agora é : " + c);

// ---Exercício 2:
// ---Pergunta: Desestruture o array [4, 5, 6] em duas variáveis chamadas x e y .

const array = [4, 5, 6];
let [...x] = array;
let [...y] = array;
console.log("Variável X agora é : " + x);
console.log("Variável Y agora é : " + y);

// ---Exercício 3:
// ---Pergunta: Desestruture o array ['maçã', 'banana', 'laranja'] em três variáveis chamadas fruta1 , fruta2 e fruta3 .

const arrayFrutas = ["maçã", "banana", "laranja"];
const [fruta1, fruta2, fruta3] = arrayFrutas;
console.log("Variável Fruta1 agora é : " + fruta1);
console.log("Variável Fruta2 agora é : " + fruta2);
console.log("Variável Fruta3 agora é : " + fruta3);

// ---Exercício 4:
// ---Pergunta: Desestruture o array [true, false, true] em três variáveis chamadas condicao1 , condicao2 e condicao3 .

const arrayTrueFalse = [true, false, true];
const [condicao1, condicao2, condicao3] = arrayTrueFalse;
console.log("Variável Condição1 agora é : " + condicao1);
console.log("Variável Condição2 agora é : " + condicao2);
console.log("Variável Condição3 agora é : " + condicao3);

// ---Exercício 5:
// ---Pergunta: Desestruture o array ['red', 'green', 'blue'] em três variáveis chamadas cor1 , cor2 e cor3 .

const arrayCores = ["red", "green", "blue"];
const [cor1, cor2, cor3] = arrayCores;
console.log("Variável Cor1 agora é : " + cor1);
console.log("Variável Cor2 agora é : " + cor2);
console.log("Variável Cor3 agora é : " + cor3);

// ---Exercício 6
// ---Pergunta: Desestruture o array [10, 20, 30, 40] em duas variáveis chamadas num1 e nun2:

const arrayNum = [10, 20, 30, 40];
let [...num1] = arrayNum;
let [...num2] = arrayNum;
console.log("Variável Nun1 agora é : " + num1);
console.log("Variável Nun2 agora é : " + num2);

//--- Exercício 7:
// ---Pergunta: Desestruture o array [100, 200, 300] em três variáveis chamadas centena1 , centena2 e centena3 .

const arrayCentena = [100, 200, 300];
const [centena1, centena2, centena3] = arrayCentena;
console.log("Variável Centena1 agora é : " + centena1);
console.log("Variável Centena2 agora é : " + centena2);
console.log("Variável Centena3 agora é : " + centena3);

// ---Exercício 8:
// ---Pergunta: Desestruture o array ['dog', 'cat', 'fish'] em três variáveis chamadas animal1 , animal2 e animal3 .

const arrayAnimais = ["dog", "cat", "fish"];
const [animal1, animal2, animal3] = arrayAnimais;
console.log("Variável animal1 agora é : " + animal1);
console.log("Variável animal2 agora é : " + animal2);
console.log("Variável animal3 agora é : " + animal3);

// ---Exercício 9:
// ---Pergunta: Desestruture o array [8, 6, 7, 5, 3, 0, 9] em quatro variáveis chamadas n1 , n2 , n3 e n4 .

const arrayNumeros = [8, 6, 7, 5, 3, 0, 9];
const [n1, n2, n3, ...n4] = arrayNumeros;
const [] = arrayNumeros;

console.log("Variável N1 agora é : " + n1);
console.log("Variável N2 agora é : " + n2);
console.log("Variável N3 agora é : " + n3);
console.log("Variável N4 agora é : " + n4);

// ---Exercício 10:
// ---Pergunta: Desestruture o array ['apple', 'orange', 'banana', 'grape'] em quatro variáveis chamadas fruit1 , fruit2 , fruit3 e fruit4 .

const arrayFruit = ["apple", "orange", "banana", "grape"];
const [fruit1, fruit2, fruit3, fruit4] = arrayFruit;
const [] = arrayFruit;

console.log("Variável fruit1 agora é : " + fruit1);
console.log("Variável fruit2 agora é : " + fruit2);
console.log("Variável fruit3 agora é : " + fruit3);
console.log("Variável fruit4 agora é : " + fruit4);
