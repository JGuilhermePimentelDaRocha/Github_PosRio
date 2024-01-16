//---- 1-CRIE UM ARRAY COM 5 LIVRS E EXIBA EELS NA TELA COM O FOR OF ---//
const livros = ["livro1", "livro2", "livro3", "livro4", "livro5"];
for (const item of livros) {
  console.log(item);
}

//--- 2 - AGORA EXIBA OS INDICES DESSE LIVRO ---//
for (const indice in livros) {
  console.log(indice);
}


