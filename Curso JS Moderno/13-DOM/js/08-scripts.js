const navegacion = document.querySelector(".navegacion");
// console.log(navegacion);
// console.log(navegacion.childNodes); //espacios en blanco los considera como si fuesen elementos
// console.log(navegacion.children);

// console.log(navegacion.children[0].nodeName);

// const card = document.querySelector(".card");
// card.children[1].children[1].textContent =
//   "Nuevo Heading desde traversing the dom";

const card = document.querySelector(".card");

// console.log(card.nextElementSibling);

//ultimo card

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);
