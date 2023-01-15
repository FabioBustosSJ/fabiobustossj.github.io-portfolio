import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío",
        patternMismatch: "El nombre solo debe contener letras y espacios, y no debe exceder los 50 caracteres",
    },
    correo: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        customError: "El mensaje no debe superar los 300 caracteres",
    },
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }

const validadores = {
     mensaje: (input) => validarMensaje(input),
}

function validarMensaje(input) {
    let mensaje = "";
    if (mensaje == "") {
        mensaje = "El campo nombre no debe estar vacío.";
    }
    input.setCustomValidity(mensaje)
}