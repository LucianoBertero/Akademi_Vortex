const sym = Symbol();
const sym2 = Symbol();

if (sym == sym2) {
  console.log("son iguales");
} else {
  console.log("son diferentes");
}

console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

persona[nombre] = "Juan";
persona[apellido] = "Bertero";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

for (let i in persona) {
  console.log(i);
}

//Definir descripcion de Symbol

const nombreCliente = Symbol("Nombre del cliente");
const cliente = {};

cliente[nombreCliente] = "Pedro";
