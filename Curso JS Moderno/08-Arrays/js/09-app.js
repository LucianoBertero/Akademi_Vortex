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

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre + " " + carrito[i].precio);
}

carrito.forEach((carrito) => {
  console.log(carrito.nombre + " " + carrito.precio);
});

carrito.map((carrito) => {
  console.log(carrito.nombre + " " + carrito.precio);
});
