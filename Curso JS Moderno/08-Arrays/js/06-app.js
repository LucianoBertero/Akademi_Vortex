const carrito = [];

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};
const producto2 = {
  nombre: "Monitor 100 pulgadas",
  precio: 4000,
};

const producto3 = {
  nombre: "teclado",
  precio: 4000,
};

let resultado = [...carrito, producto, producto2, producto3];

resultado = [...resultado, producto3];
console.table(resultado);
