// for (let i = 0; i <= 10; i += 2) {
//   console.log(`Numero: ${i}`);
// }

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`el numero ${i} es par`);
  } else {
    console.log(`el numero ${i} es impar`);
  }
}

const carrito = [
  {
    nombre: "Monitor 32 pulgadas",
    precio: 400,
  },
  {
    nombre: "Monitor 100 pulgadas",
    precio: 4000,
  },
  {
    nombre: "teclado",
    precio: 4000,
  },
  {
    nombre: "teclado",
    precio: 4000,
  },
];

console.log(carrito[2]);
console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
  console.table(carrito[i]);
}
