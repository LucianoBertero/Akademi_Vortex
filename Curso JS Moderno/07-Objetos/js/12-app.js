//Object literal

const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

//Object contructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
console.log(producto2);
const producto3 = new Producto("Laptop", 3000);
console.log(producto3);
