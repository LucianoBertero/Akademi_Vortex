const dinero = 100;
const totalPagar = 1000;
const tarjeta = true;
const cheque = false;

if (dinero >= totalPagar) {
  console.log("Si podemos pagar");
} else if (tarjeta) {
  console.log("Si puedo pagar porque tengo la tarjeta");
} else if (cheque) {
  console.log("Si puedo pagar porque tengo la tarjeta");
} else {
  console.log("Fondos insuficientes");
}
