const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

//Agregar nuevas propiedades
producto.image = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;

console.log(producto);
