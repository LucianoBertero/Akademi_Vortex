const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;
const resultados = document.querySelector("#resultado");
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const datosBusqueda = {
  marca: "",
  year: "",
  maximo: "",
  puertas: "",
  color: "",
  minimo: "",
  transmision: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);
  llenarSelect();
});
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
  filtrarAuto();
});

function mostrarAutos(autos) {
  limpiarHTML();
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    const { marca, modelo, puerta, year, puertas, transmision, precio, color } =
      auto;
    autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} - ${transmision} - $${precio} - ${color}`;

    resultados.appendChild(autoHTML);
  });
}

function limpiarHTML() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}

function llenarSelect() {
  console.log("llenando el select");
  for (let i = max; i >= min; i--) {
    console.log(i);
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  console.log(resultado.length);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarHTML();
  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent =
    "No hay Resultados, intenta con otros terminos de busqueda";
  resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}

function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === parseInt(datosBusqueda.year);
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio > parseInt(datosBusqueda.minimo);
  }
  return auto;
}
function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio < parseInt(datosBusqueda.maximo);
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === parseInt(datosBusqueda.puertas);
  }
  return auto;
}
function filtrarTransmision(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  }
  return auto;
}
