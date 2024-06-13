export const nombreCliente = "Juan";
export const ahorro = 300;

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente: ${nombre} - ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("tiene saldo");
  } else {
    console.log("El cliente no tiene saldo");
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInfo() {
    return `Cliente: ${this.nombre} - ${this.ahorro}`;
  }
}
