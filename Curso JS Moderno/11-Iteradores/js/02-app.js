for (let i = 0; i <= 20; i++) {
  if (i === 5) {
    console.log("Cinco");
    continue;
  }
  console.log(i);
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
    descuento: true,
  },
  {
    nombre: "teclado",
    precio: 4000,
  },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
    continue;
  }
}
