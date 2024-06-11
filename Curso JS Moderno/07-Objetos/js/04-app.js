const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

const nombre = producto.nombre;
console.log(producto.nombre);
console.log(nombre);

const { precio, disponible } = producto;
console.log(precio);
console.log(disponible);
