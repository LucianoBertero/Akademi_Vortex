document.addEventListener("DOMContentLoaded", iniciarApp);

// Selecciona los elementos
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const resetBtn = document.querySelector("#resetBtn");

// Expresión regular para validar email
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

// Agrega los event listeners
email.addEventListener("blur", validarFormulario);
asunto.addEventListener("blur", validarFormulario);
mensaje.addEventListener("blur", validarFormulario);
formulario.addEventListener("submit", enviarEmail);
resetBtn.addEventListener("click", resetFormulario);

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    const err = document.querySelector("p.error");
    if (err) {
      err.remove();
    }
    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (re.test(e.target.value)) {
      const err = document.querySelector("p.error");
      if (err) {
        err.remove();
      }
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarError("Email no válido");
    }
  }

  if (re.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  } else {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-color-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}

function enviarEmail(e) {
  e.preventDefault();

  // Spinner al presionar Enviar
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // Mensaje de enviado
  const enviado = document.createElement("p");
  enviado.textContent = "Mensaje Enviado Correctamente";
  enviado.classList.add("bg", "text-center", "mt-10", "p-2");

  // Ocultar Spinner y mostrar mensaje de enviado
  setTimeout(() => {
    spinner.style.display = "none";
    document.querySelector("#loaders").appendChild(enviado);

    setTimeout(() => {
      enviado.remove();
      formulario.reset();
      iniciarApp(); // Reinicia la aplicación para deshabilitar el botón de enviar nuevamente
    }, 5000);
  }, 3000);
}
function resetFormulario(e) {
  formulario.reset();
  e.preventDefault();
}
