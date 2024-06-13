const carrito = new Set();
carrito.add("camisa");
carrito.add("disco N1");

carrito.delete("camisa");
console.log(carrito.has("camisa"));
console.log(carrito.size);
console.log(carrito);

carrito.forEach((producto, index, pertenece) => console.log(producto));

carrito.clear();
console.log(carrito);

const numeros = [1, 2, 1, 3, 3, 4, 5, 6, 7, 8, 9, 10];
const noDuplicados = new Set(numeros); //no admite duplicados

console.log(noDuplicados);
