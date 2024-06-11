function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(400);
total1 = agregarCarrito(100);
total2 = agregarCarrito(200);

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);
