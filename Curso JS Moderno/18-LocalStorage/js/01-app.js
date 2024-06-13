localStorage.setItem("nombre", "Luciano");

const producto = {
  nombre: "monitor 24 pulgadas",
  precio: 234,
};

const productoString = JSON.stringify(producto);
localStorage.setItem("producto", productoString);

const meses = ["enero", "febrero", "marzo"];
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);
