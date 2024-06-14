const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = false;
  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("Descuento no se aplico");
  }
});

aplicarDescuento
  .then((resultado) => descuento(mensaje))
  .catch((err) => console.log(err));

// 3 valores posibles
//fultfield -> se cumplio
//reject -> no se cumplio
//pending -> aun no se cumple y no fue rechazado

function descuento(mensaje) {
  console.log(mensaje);
}
