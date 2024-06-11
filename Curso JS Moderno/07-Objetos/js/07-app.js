const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

producto.disponible = false;
delete producto.precio;
const nombreProducto = producto.nombre;
console.log(producto);
