const pendiente = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

pendiente.forEach((pendiente, index) => {
  console.log(pendiente);
});

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

const nuevoArreglo2 = carrito.forEach((producto) => {
  console.table(producto);
});

const nuevoArreglo = carrito.map((producto) => {
  return producto.nombre;
});

console.log(nuevoArreglo, nuevoArreglo2);
