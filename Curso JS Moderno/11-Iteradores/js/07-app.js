const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

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

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(producto.nombre);
}
