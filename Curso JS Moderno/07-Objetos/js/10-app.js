const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1Kg",
  medida: "1m",
};

console.log(producto, medidas);

const resultado = Object.assign(producto, medidas);
console.log("🚀 ~ resultado:", resultado);

const resultado2 = { ...producto, ...medidas };
console.log("🚀 ~ resultado2:", resultado2);
