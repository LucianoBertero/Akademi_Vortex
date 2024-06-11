"use strict";

const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

Object.freeze(producto);

// producto.disponible = false;
// producto.precio = 500;
delete producto.precio;
console.log(Object.isFrozen(producto));
console.log(producto);
