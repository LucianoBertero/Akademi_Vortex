const paises = ["Francia", "Espania", "Portugal", "Argentina"];

function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000);
}

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((paises) => console.log(paises));
  }, 1000);
}

nuevoPais("Alemania", mostrarPaises);
