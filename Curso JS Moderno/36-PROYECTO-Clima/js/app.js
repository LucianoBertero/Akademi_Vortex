const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();
  console.log("buscando clima");
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;
  //   console.log(ciudad, pais);
  if (ciudad === "" || pais === "") {
    mostrarError("Ambos campos son obligatorios");
    return;
  }

  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  console.log(mensaje);

  const alerta = document.querySelector(".bg-red-100");
  if (!alerta) {
    const alerta = document.createElement("div");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.innerHTML = `
          <strong class="font-bold">Error!</strong>
          <span class="block">${mensaje}</span>
      `;
    container.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
}

function consultarAPI(ciudad, pais) {
  const appId = "8f0278bad2249f6cbe5c2d867be322ac";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  console.log(url);
  spinner();
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      limpiarHTML();

      if (datos.cod === "404") {
        mostrarError("Ciudad no encontrada");
        return;
      }
      mostrarClima(datos);
    })
    .catch((error) => console.log(error));
}

function mostrarClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const centigrados = kelvinACentigrados(temp);
  const max = kelvinACentigrados(temp_max);

  const min = kelvinACentigrados(temp_min);

  const nombreCiudad = document.createElement("p");
  nombreCiudad.innerHTML = `Clima en ${name}`;
  nombreCiudad.classList.add("font-bold", "text-2xl");

  const actual = document.createElement("p");
  actual.innerHTML = `${centigrados} &#8451;`;
  actual.classList.add("font-bold", "text-6xl");

  const maxima = document.createElement("p");
  maxima.innerHTML = `Max: ${max} &#8451;`;
  maxima.classList.add("text-xl");

  const minima = document.createElement("p");
  minima.innerHTML = `Min: ${min} &#8451;`;
  minima.classList.add("text-xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(nombreCiudad);

  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(maxima);
  resultadoDiv.appendChild(minima);

  resultado.appendChild(resultadoDiv);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

const kelvinACentigrados = (grados) => {
  return parseInt(grados - 273.15);
};

function spinner() {
  limpiarHTML();
  const divSipinner = document.createElement("div");
  divSipinner.classList.add("sk-fading-circle");

  divSipinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    

    `;
  resultado.appendChild(divSipinner);
}
