const cargarJsonArray = document.querySelector("#cargarJSONArray");
cargarJsonArray.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("data/empleados.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarHTML(datos))
    .catch((error) => console.log(error));
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");
  let html = "";
  empleados.forEach((empleado) => {
    const { id, nombre, empresa, trabajo } = empleado;
    html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
  });
  contenido.innerHTML = html;
}
