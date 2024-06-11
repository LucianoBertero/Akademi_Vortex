const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};

const { nombre } = producto;
console.log(nombre);

//desctucturing con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(tercero);

const [, , tres] = numeros;
console.log(tres);
