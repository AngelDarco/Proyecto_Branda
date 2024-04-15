export default function addProducts(item, session, carro = false) {
  if (!session) {
    // eslint-disable-next-line
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "!Debes iniciar sesion primero ",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
  let container = item.target.parentNode;
  if (carro) container = item.target.parentNode.parentNode;

  const img = container.children[0].src;
  const description = container.children[1];
  const id = container.id;
  const nombre = description.children[0].innerHTML;
  const seccion = description.children[1].innerHTML;
  const precio = description.children[2].innerHTML;

  const data = new FormData();
  data.append("imagen", img);
  data.append("nombre", nombre);
  data.append("seccion", seccion);
  data.append("precio", precio);
  data.append("id", id);

  fetch("../php/addProducts.php", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((dato) => {
      if (dato === "Agregado") {
        // eslint-disable-next-line
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Agregado al Carro",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (dato === "alreadyAdded") {
        // eslint-disable-next-line
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "!Otro mas agregado al carro",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // eslint-disable-next-line
        Swal.fire({
          position: "center",
          icon: "error",
          title: "!Lo sentimos, algo salio mal",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
