import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarAPI() {
    console.log("desde consultar api");
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        if (result.lyrics) {
          const { lyrics } = result;

          UI.divResultado.textContent = lyrics;
          UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
        } else {
          UI.divMensajes.textContent =
            "La cancion no existe prueba con otra busqueda";
          UI.divMensajes.classList.add("error");
          setTimeout(() => {
            UI.divMensajes.textContent = "";
            UI.divMensajes.classList.remove("error");
          }, 2000);
        }
      });
  }
}

export default API;
