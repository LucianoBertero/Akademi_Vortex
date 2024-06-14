import {
  ahorro,
  mostrarInformacion,
  nombreCliente,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);

console.log(cliente.mostrarInfo());

const empresa = new Empresa("Codigo con Juan", 100, "Aprendiendo en Linea");
console.log(empresa);
console.log(empresa.mostrarInfomacion());
