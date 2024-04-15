export default function logout(loginIcon, logoutIcon, nickname) {
  if (loginIcon)
    logoutIcon.addEventListener("click", () => {
      fetch("./php/logout.php")
        .then((res) => res.json())
        .then((data) => {
          if (data === "Logout") {
            loginIcon.classList.remove("hide");
            logoutIcon.classList.add("hide");
            if (nickname) nickname.innerHTML = "Invitado";
            window.localStorage.removeItem("BeautyFaceSession");

            // eslint-disable-next-line
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Session Cerrada",
              showConfirmButton: false,
              timer: 1000,
            });
            setTimeout(() => {
              window.location.href = "./index.html";
            }, 2000);
          }
        })
        .catch((err) => new Error(err));
    });
}
