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

carrito.forEach((carrito) => {
  console.log(carrito.nombre + " " + carrito.precio);
});

//crea un arrelo nuevo, solo el map
const nuevoArreglo = carrito.map((carrito) => {
  console.log(carrito.nombre + " " + carrito.precio);
});

console.log(nuevoArreglo);
