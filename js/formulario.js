import login from "./login.js";
import registro from "./registro.js";

document.addEventListener("DOMContentLoaded", () => {
  function formulario() {
    const formulario = document.getElementById("formulario");
    const inputs = document.querySelectorAll("#formulario input");

    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const campos = {
      nombre: false,
      password: false,
      correo: false,
    };

    const validarFormulario = (e) => {
      switch (e.target.name) {
        case "nombre":
          validarCampo(expresiones.nombre, e.target, "nombre");
          break;
        case "password":
          validarCampo(expresiones.password, e.target, "password");
          break;
        case "correo":
          validarCampo(expresiones.correo, e.target, "correo");
          break;
      }
    };

    const validarCampo = (expresion, input, campo) => {
      if (expresion.test(input.value)) {
        document
          .getElementById(`grupo__${campo}`)
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById(`grupo__${campo}`)
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector(`#grupo__${campo} i`)
          .classList.add("fa-check-circle");
        document
          .querySelector(`#grupo__${campo} i`)
          .classList.remove("fa-times-circle");
        document
          .querySelector(`#grupo__${campo} .formulario__input-error`)
          .classList.remove("formulario__input-error-activo");
        campos[campo] = true;
      } else {
        document
          .getElementById(`grupo__${campo}`)
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById(`grupo__${campo}`)
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector(`#grupo__${campo} i`)
          .classList.add("fa-times-circle");
        document
          .querySelector(`#grupo__${campo} i`)
          .classList.remove("fa-check-circle");
        document
          .querySelector(`#grupo__${campo} .formulario__input-error`)
          .classList.add("formulario__input-error-activo");
        campos[campo] = false;
      }
    };

    inputs.forEach((input) => {
      if (!input) return;
      input.addEventListener("keyup", validarFormulario);
      input.addEventListener("blur", validarFormulario);
    });

    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const terminos = document.getElementById("terminos");
      if (terminos && e.target.classList.contains("login")) {
        logins(campos, formulario, terminos);
      }
      if (e.target.classList.contains("registro")) {
        registrar(campos, formulario, terminos);
      }
    });
  }
  formulario();
});

function registrar(campos, formulario, terminos) {
  if (campos.nombre && campos.password && campos.correo && terminos.checked) {
    registro(formulario);
    document
      .getElementById("formulario__mensaje")
      .classList.remove("formulario__mensaje-activo");
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);
  }
}

function logins(campos, formulario, terminos) {
  if (campos.password && campos.correo && terminos.checked) {
    login(formulario);
    document
      .getElementById("formulario__mensaje")
      .classList.remove("formulario__mensaje-activo");
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);
  }
}
