const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre", "Octubre"];

//concat

const meses3 = meses.concat(meses2);
console.table(meses3);

const resultado = [...meses, ...meses2];
console.table(resultado);
