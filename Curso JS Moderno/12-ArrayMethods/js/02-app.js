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
  console.log(i);
  console.log(mes);
  //forma manual
  if (mes === "Marzo") {
    console.log("Marzo si existe");
  }
});

console.log("---------------");
const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice + " es el indice de Abril");

//encontrar indice en un arreglo de objetos

console.log("---------------");
const indice2 = carrito.findIndex((producto) => producto.nombre === "Tablet");
if (indice2 != -1) {
  console.log("Tablet si existe");
}
