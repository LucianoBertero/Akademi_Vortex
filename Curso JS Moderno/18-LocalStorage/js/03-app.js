localStorage.removeItem("nombre");

const mesesArray = JSON.parse(localStorage.getItem("meses"));
mesesArray.push("Nuevo Mes");
console.log(mesesArray);
localStorage.setItem("meses", mesesArray);

localStorage.clear();
