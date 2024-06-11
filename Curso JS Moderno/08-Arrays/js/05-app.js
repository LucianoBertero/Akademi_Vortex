const carrito = [];

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};
const producto2 = {
  nombre: "Monitor 100 pulgadas",
  precio: 4000,
};
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "teclado",
  precio: 4000,
};

carrito.push(producto3);

console.table(carrito);
