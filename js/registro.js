export default function registro (formulario) {
  const data = new FormData(formulario)

  fetch('../php/registro.php', {
    method: 'POST',
    body: data
  })
    .then(res => res.json())
    .then(data => {
      if (data === 'Registrado') {
        // eslint-disable-next-line
          Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'El Usuario ya esta registrado',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (data === 'UserAdd') {
        // eslint-disable-next-line
          Swal.fire({
          title: 'Usuario Registrado',
          text: 'Quieres iniciar Sesion!',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iniciar Sesion'
        }).then((result) => {
          if (result.isConfirmed) window.location = './login.html'
          else window.location = '../index.html'
        })
        formulario.reset()
      } else if (data === 'CamposVacios') {
        // eslint-disable-next-line
          Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Por favor llena todos los Campos',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch(err => {
      console.log(err)
      // eslint-disable-next-line
        Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error no especificado: ' + err,
        showConfirmButton: false,
        timer: 1500
      })
    })
}
