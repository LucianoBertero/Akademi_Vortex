const cliente = new Map();
//LLAVE VALOR
cliente.set("nombre", "karen");
cliente.set("tipo", "premium");
cliente.set("saldo", 300);

console.log(cliente);

console.log(cliente.has("nombre"));
console.log(cliente.get("nombre"));
cliente.delete("tipo");
console.log(cliente);
cliente.clear();
console.log(cliente);

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);
console.log(paciente);

paciente.set("dr", "asignado");
