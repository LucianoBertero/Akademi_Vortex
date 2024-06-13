const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando = false;

class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  editarCita(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    divMensaje.textContent = mensaje;
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    //
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  imprimirCitas({ citas }) {
    this.limpiarHTML();
    citas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;

      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement("p");
      propietarioParrafo.innerHTML = `
      <span class='font-weight-bolder'>Propietario: </span> ${propietario}`;

      const telefonoParrafo = document.createElement("p");
      telefonoParrafo.innerHTML = `
      <span class='font-weight-bolder'>Telefono: </span> ${telefono}`;

      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `
      <span class='font-weight-bolder'>Fecha: </span> ${fecha}`;

      const horaParrafo = document.createElement("p");
      horaParrafo.innerHTML = `
      <span class='font-weight-bolder'>Hora: </span> ${hora}`;

      const sintomasParrafo = document.createElement("p");
      sintomasParrafo.innerHTML = `
      <span class='font-weight-bolder'>Sintomas: </span> ${sintomas}`;

      const bntEliminar = document.createElement("button");
      bntEliminar.classList.add("btn", "btn-danger", "mr-2");
      bntEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
`;
      bntEliminar.onclick = () => eliminarCita(id);

      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-info");
      btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
`;
      btnEditar.onclick = () => cargarEdicion(cita);

      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(bntEliminar);
      divCita.appendChild(btnEditar);

      contenedorCitas.appendChild(divCita);
    });
  }
  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UI();
const administrarCitas = new Citas();

eventListeners();

function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);

  telefonoInput.addEventListener("input", datosCita);

  fechaInput.addEventListener("input", datosCita);

  horaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);
  formulario.addEventListener("submit", nuevaCita);
}

const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
  console.log(citaObj);
}

function nuevaCita(e) {
  e.preventDefault();
  //extreer info

  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    console.log("todos los campos son obligatorios");
    ui.imprimirAlerta("Todos los campos deben ser validos", "error");
    return;
  }

  if (editando) {
    ui.imprimirAlerta("Editado correctamente");

    administrarCitas.editarCita({ ...citaObj });

    formulario.querySelector('button[type="submit"]').textContent =
      "Crear Cita";
    editando = false;
  } else {
    citaObj.id = Date.now();
    administrarCitas.agregarCita({ ...citaObj });
    ui.imprimirAlerta("Se agrego correctamente");
  }

  //generar id unico

  reiniciarObjeto();
  formulario.reset();

  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

function eliminarCita(id) {
  administrarCitas.eliminarCita(id);
  ui.imprimirAlerta("La cita se elimino correctamente");
  ui.imprimirCitas(administrarCitas);
}

function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";
  editando = true;
}
