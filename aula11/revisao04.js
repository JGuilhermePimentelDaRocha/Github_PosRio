const movimentos = ["Andar", "Voltar", "Pular", "Abaixar"];

const comando = "z";

if (comando === "W") {
  console.log(movimentos[2]);
} else if (comando === "A") {
  console.log(movimentos[1]);
} else if (comando === "S") {
  console.log(movimentos[3]);
} else if (comando === "D") {
  console.log(movimentos[0]);
} else {
  console.log("Error 404");
}
