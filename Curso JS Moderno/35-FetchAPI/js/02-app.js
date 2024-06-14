const cargarTxtBtn = document.querySelector("#cargarJSON");
cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("data/empleado.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => mostrarHTML(datos));
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");
  console.log(empresa);
  contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}
