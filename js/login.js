export default function login(formulario) {
  const data = new FormData(formulario);
  fetch("../php/login.php", {
    method: "POST",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data === "Registrado") {
        session();
      } else if (data === "NoRegistrado") {
        // eslint-disable-next-line
        Swal.fire({
          title: "Usuario No Registrado",
          text: "Debes Registrarte Primero!",
          icon: "error",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Registrar",
          cancelButtonText: "Reintentar",
        }).then((result) => {
          if (result.isConfirmed) window.location = "../html/registro.html";
        });
      } else if (data === "Vacio") {
        // eslint-disable-next-line
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Campos Vacios",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // eslint-disable-next-line
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error no Especificado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((err) => {
      // eslint-disable-next-line
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha habido un error interno no especificado",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Ha habido un error: ", err);
    });
}

function session() {
  const nickname = document.getElementById("usuario");

  fetch("../php/sesion.php")
    .then((res) => res.json())
    .then((data) => {
      const salida = data.split(";");
      const id = salida[1];
      const user = salida[0];

      if (id && user && data !== "SesionNoIniciada") {
        if (nickname) nickname.innerHTML = user || "Invitado";

        window.localStorage.setItem("BeautyFaceSession", user);
        // eslint-disable-next-line
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Session Iniciada",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "../index.html";
      }
    })
    .catch(() => {
      // eslint-disable-next-line
      Swal.fire({
        position: "center",
        icon: "error",
        title: "!Algo salió mal",
        showConfirmButton: false,
        timer: 1500,
      });
    });
}
