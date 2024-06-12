const enlace = document.createElement("A");

//Agregando el texto
enlace.textContent = "Nuevo Enlace";
console.log(enlace);

//Agregando href
enlace.href = "/nuevo-enlace";
console.log(enlace);

enlace.onclick = myFuncion;

//seleccionar navegacion
const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]); //ponerlo en un lado especifico

function myFuncion() {
  alert("Diste click en el enlace");
}

//Crear un card dinamicamente
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");
console.log(parrafo1);
const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Iron Maiden";
parrafo2.classList.add("titulo");
console.log(parrafo2);
const parrafo3 = document.createElement("P");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");
console.log(parrafo3);

//Crear div con la clase de info
const info = document.createElement("DIV");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear imagen
const imagen = document.createElement("IMG");
imagen.src = "img/hacer2.jpg";
imagen.alt = "Texto de prueba";

//crear card
const card = document.createElement("DIV");
card.classList.add("card");

card.appendChild(imagen);
card.appendChild(info);

//Insertar en el HTML

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
