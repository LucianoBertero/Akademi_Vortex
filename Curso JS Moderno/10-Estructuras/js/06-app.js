const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Si puedes comprar");
} else if (!puedePagar && !usuario) {
  console.log("No puede comprar");
} else if (!usuario) {
  console.log("Inicia sesión o registrate");
} else if (!puedePagar) {
  console.log("Fondos insuficientes");
}
