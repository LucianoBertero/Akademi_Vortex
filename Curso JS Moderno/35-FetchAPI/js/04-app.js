const cargarAPIBtn = document.querySelector("#cargarAPI");
cargarAPIBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "https://picsum.photos/list";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarHTML(datos))
    .catch((error) => console.log(error));
}

function mostrarHTML(datos) {
  const contenido = document.querySelector(".contenido");
  let html = "";
  datos.forEach((foto) => {
    const { author, post_url } = foto;
    html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver imagen</a>
    `;
  });
  contenido.innerHTML = html;
}
