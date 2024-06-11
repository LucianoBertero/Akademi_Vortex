"use strict";

const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

Object.seal(producto);

producto.disponible = false;
producto.precio = 500;

console.log(producto);
console.log(Object.isSealed(producto));
