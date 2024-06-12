const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

meses.forEach((mes, i) => {
  console.log(mes, i);
  if (mes === "Marzo") {
    console.log("Marzo si existe");
  }
});

// Includes
const resultado = meses.includes("Marzo"); //solo anda si tiene un indice
if (resultado) {
  console.log("Marzo si existe");
}

// Some en un arreglo de objetos
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe);
