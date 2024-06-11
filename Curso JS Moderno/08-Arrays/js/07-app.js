const carrito = [];

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};
const producto2 = {
  nombre: "Monitor 100 pulgadas",
  precio: 4000,
};

const producto3 = {
  nombre: "teclado",
  precio: 4000,
};

const producto4 = {
  nombre: "teclado",
  precio: 4000,
};

let resultado = [...carrito, producto, producto2, producto3, producto4];
resultado = [...resultado, producto3];

// eliminar ultimo elemento
console.table(resultado);
resultado.pop();
console.table(resultado);

// eliminar del inicio del arreglo
console.table(resultado);
resultado.shift();
console.table(resultado);

// eliminar un elemento intermedio
console.table(resultado);
resultado.splice(1, 1);
console.table(resultado);
