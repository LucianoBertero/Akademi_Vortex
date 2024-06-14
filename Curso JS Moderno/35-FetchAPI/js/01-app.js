const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("data/datos.txt")
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.text();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}
