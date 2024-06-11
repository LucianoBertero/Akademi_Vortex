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

console.log(producto);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.fabricantes.pais);
