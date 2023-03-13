export default function deleteProducts (item, session) {
  if (!session) {
    // eslint-disable-next-line
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: '!Debes iniciar sesion primero ',
      showConfirmButton: false,
      timer: 1500
    })
    return
  }
  const container = item.target.parentNode.parentNode
  const id = container.id
  const data = new FormData()
  data.append('id', id)
  fetch('../php/deleteProduct.php', {
    method: 'POST',
    body: data
  })
    .then(res => res.json())
    .then(data => {
      if (data === 'Eliminado') {
        // eslint-disable-next-line
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Producto Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (data === 'menosUno') {
        // eslint-disable-next-line
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Uno menos',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        // eslint-disable-next-line
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ha ocurrido un error',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch(err => console.log(err))
}
