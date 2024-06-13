const ciudades = ["Londes", "New York", "Cartagena"];
const ordenes = new Set([123, 123, 321, 231]);
const datos = new Map();

datos.set("nombre", "juan");
datos.set("profesion", "Tecnico");

//Default
for (let ciudad of ciudades) {
  console.log(ciudad);
}

//keys iterator
// for (let keys of ciudades.keys()) {
//   console.log(keys);
// }
// for (let keys of ordenes.keys()) {
//   console.log(keys);
// }

//Entries iterator
// for (let entry of ciudades.entries()) {
//   console.log(entry);
// }
// for (let entry of ordenes.entries()) {
//   console.log(entry);
// }

// for (let entry of datos.entries()) {
//   console.log(entry);
// }

// for (let value of ciudades.values()) {
//   console.log(value);
// }
