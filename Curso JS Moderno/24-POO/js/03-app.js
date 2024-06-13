class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }

  static bienvenida() {
    return ` Bienvenida al cajero`;
  }
}

//Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, categoria, telefono) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida() {
    // se reescribe cuando se escribe  con el mismo nombre
    return ` Bienvenida al cajero de empresas`;
  }
}

const juan = new Cliente("juan", 400);
const empresa = new Empresa(
  "Codigo con juan",
  500,
  12312312,
  "Aprendizaje en linea"
);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());
