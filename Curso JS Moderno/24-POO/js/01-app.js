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

const juan = new Cliente("juan", 400);
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida()); //Pertenece mas a la clase

const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }
};

const juan2 = new Cliente2("juan", 400);
console.log(juan2);
console.log(juan2.mostrarInformacion());
