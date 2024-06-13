const nombre = localStorage.getItem("nombre");
console.log(nombre);
const nombre2 = localStorage.getItem("nombre2");
console.log(nombre2);

const produtoJSON = localStorage.getItem("producto");
console.log(JSON.parse(produtoJSON));

const meses = localStorage.getItem("meses");
console.log(JSON.parse(meses));
const mesesArray = JSON.parse(meses);
