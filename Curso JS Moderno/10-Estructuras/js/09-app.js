const autenticado = true;
const puedePagar = false;

console.log(
  autenticado
    ? puedePagar
      ? "Si autenticado y puede pagar"
      : "Si autenticado pero no puede pagar"
    : "No autenticado"
);
