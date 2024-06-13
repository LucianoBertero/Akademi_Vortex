const weakset = new WeakSet();
//SOLO ADMITEN OBJETOS
const cliente = {
  nombre: "luciano",
  saldo: 100,
};

const nombre = "juan";
// weakset.add(nombre);

weakset.add(cliente);

console.log(weakset);
// weakset.delete(cliente);
console.log(cliente.size); // no se puede saber, no son iterables
