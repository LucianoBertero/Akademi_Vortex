const dinero = 100;
const totalPagar = 1000;
const tarjeta = true;
const cheque = false;

switch (true) {
  case dinero >= totalPagar:
    console.log("Si podemos pagar");
    break;
  case tarjeta:
    console.log("Si puedo pagar porque tengo la tarjeta");
    break;
  case cheque:
    console.log("Si puedo pagar porque tengo la tarjeta");
    break;
  default:
    console.log("Fondos insuficientes");
    break;
}
