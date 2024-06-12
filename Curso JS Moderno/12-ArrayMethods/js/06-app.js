const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const resutado = carrito.every((producto) => producto.precio < 500); // se tiene que cumplir todas las condiciones
console.log(resutado);

const resutado2 = carrito.some((producto) => producto.precio < 550); // se tiene que cumplir alguna las condiciones
console.log(resutado);
