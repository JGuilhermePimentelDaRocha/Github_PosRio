// const perfil = "ADM";

// switch (perfil) {
//   case "ADM":
//     console.log("Adiministrador");
//     break;
//   case "USER":
//     console.log("Usuario");
//     break;
//   case "TEST":
//     console.log("Usuario de Teste");
//     break;
//   default:
//     console.log("Usuario Inválido");
// }

//-- codigo com function--//

function validarPerfil(perfil) {
  switch (perfil) {
    case "ADM":
      return verificarAdministrador();
      break;
    case "USER":
      return verificarUsuarioPadrao();
      break;
    case "TEST":
      return verificarUsuarioTest();
      break;
    default:
      exibirErro();
  }
}

function verificarAdministrador() {
  // encapisular uma funcion //
  return "Codigo para enviar ou manipular a area de Administrador";
}
function verificarUsuarioPadrao() {
  // encapisular uma funcion //
  return "Codigo para enviar ou manipular a area de Usuario";
}
function verificarUsuarioTest() {
  // encapisular uma funcion //
  return "Codigo para enviar ou manipular a area de Teste";
}
function exibirErro() {
  // encapisular uma funcion //
  return "Usuario não reconhecido";
}
const resultado = validarPerfil("ADM");
console.log(resultado);
