const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1KG",
      medida: "1m",
    },
    fabricantes: {
      pais: "China",
    },
  },
};

const {
  nombre,
  informacion,
  informacion: { fabricantes },
} = producto;

console.log(informacion);
console.log(nombre);
console.log(fabricantes.pais);
