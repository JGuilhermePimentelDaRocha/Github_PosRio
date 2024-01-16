//const notas = [8.50005, 7.88888, 9.45000, 5.99990];
//for (let i = 0; i < notas.length; i++) {

//---- toFixed limita as casas decimais ---//

// let item = notas[i].toFixed(1);
// console.log(item);
//  }

//--- FOR OF ---// EXIBE TODOS OS ELEMENTOS ---///

const notas = [8.50005, 7.88888, 9.45, 5.9999];

for (const item of notas) {
  console.log(item);
}

// FOR IN ---// EXIBE O INDICES ---//

const nota = [8.50005, 7.88888, 9.45, 5.9999];

for (const item in nota) {
  console.log(item);
}
