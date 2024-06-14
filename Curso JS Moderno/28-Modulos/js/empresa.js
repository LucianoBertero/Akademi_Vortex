import { Cliente } from "./cliente";

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro);
    this.categoria = categoria;
  }

  mostrarInfomacion() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
  }
}
