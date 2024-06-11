const nombre = "Aspiradola Nuclear";
const precio = 500;

const producto = {
  nombre: "Aspiradola laser",
  precio: 300,
  disponible: true,
  mosatrarInfo: function () {
    console.log(
      `El Producto ${this.nombre} tiene un precio de ${this.precio} `
    );
  },
};

const producto2 = {
  nombre: "Tablet",
  precio: 200,
  disponible: true,
  mosatrarInfo: function () {
    console.log(
      `El Producto ${this.nombre} tiene un precio de ${this.precio} `
    );
  },
};

producto.mosatrarInfo();
producto2.mosatrarInfo();
