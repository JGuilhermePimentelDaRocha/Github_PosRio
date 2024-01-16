// -- CONCAT() é usado para combinar dois ou mais arrays em um único array. --//
const nomes = ["Jose", "Guilherme", "Marcos", "Julio", "Fabiano"];
const sobrenomes = ["Pimentel", "Souza", "Rocha", "Silva", "Machado"];
const uniao = nomes.concat(sobrenomes);
// console.log(uniao);

// -- JOIN() é usado para criar uma string a partir dos elementos de um array. --//
const jucao = ["Jose","guilherme"];
const nomeCompleto = jucao.join("-");
//console.log(nomeCompleto);

// -- SPLICE() é usado para retornar uma cópia de parte de um array - "ELE REMOVE  UM INDICE ESPECIFICO DO ARRAY " --//
const cores = ["vermelho", "Verde", "Azul", "Amarelo", "Marron"];
cores.splice(1,2);
//console.log(cores)

// -- REVERSE() é usado para inverter a ordem dos elementos em um array. ---//
const cor = ["vermelho", "Verde", "Azul", "Amarelo", "Marron"];
cor.reverse();
//console.log(cor);

// -- SORT()ordena os elementos do próprio array e retorna o array. "A ordenação não é necessariamente estável" ---//
const numeros = [100,2,10,20,45,68];
numeros.sort();
//console.log(numeros);

// -- INDEXOF()retorna o primeiro índice em que o elemento pode ser encontrado no array. ---//
const palavras = ["CARRO", "BALÃO", "RODA", "PEDRA"];

const buscar = "roda";
const verificador = palavras.indexOf(buscar.toUpperCase()) 
//-- toUpperCase() valores retorna esta string convertida para maiúscula. --//
//-- tolowercase()  valores retorna esta string convertida para minúscula. --//

console.log(verificador);

