const inputs = document.querySelectorAll("input, textarea");
const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];
const mensajesDeError = {
  nombre: {
    valueMissing: "El campo de nombre no puede estar vacío",
    patternMismatch:
      "El nombre solo debe contener letras y espacios, y no debe exceder los 50 caracteres",
  },
  correo: {
    valueMissing: "Escriba su correo electrónico",
    typeMismatch: "El correo electrónico no es valido",
  },
  asunto: {
    valueMissing: "Escriba el asunto del mensaje",
    patternMismatch: "El asunto no debe exceder los 50 caracteres",
  },
  mensaje: {
    valueMissing: "Escriba el mensaje que desea comunicar",
    customError: "El mensaje no debe exceder los 300 caracteres",
  },
};

const validadores = {
  mensaje: (input) => validarMensaje(input),
};

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.classList.remove("formcontato__input--invalid");
    input.parentElement.querySelector(
      ".formcontato__messaje--error"
    ).innerHTML = "";
  } else {
    input.classList.add("formcontato__input--invalid");
    input.parentElement.querySelector(
      ".formcontato__messaje--error"
    ).innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
}

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarMensaje(input) {
  const largoDelMensaje = input.value.length;
  let mensaje = "";
  if (largoDelMensaje > 300) {
    mensaje = "El mensaje no debe exceder los 300 caracteres";
  }
  input.setCustomValidity(mensaje);
}