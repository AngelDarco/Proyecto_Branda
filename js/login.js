import Swal from 'sweetalert2'

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(formulario)

    fetch('../php/login.php', {
      method: 'POST',
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        if (data === 'Registrado') { session() } else if (data === 'NoRegistrado') {
          Swal.fire({
            title: 'Usuario No Registrado',
            text: 'Debes Registrarte Primero!',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Registrar',
            cancelButtonText: 'Reintentar'
          }).then((result) => {
            if (result.isConfirmed) window.location = '../html/registro.html'
          })
        } else if (data === 'Vacio') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campos Vacios',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error no Especificado',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Error: ${err}`,
          showConfirmButton: false,
          timer: 1500
        })
      })
  })
})

function session () {
  const nickname = document.getElementById('usuario')

  fetch('../php/sesion.php')
    .then(res => res.json())
    .then(data => {
      const salida = data.split(';')
      const id = salida[1]
      const user = salida[0]

      if (id && user && data !== 'SesionNoIniciada') {
        if (nickname) { nickname.innerHTML = user }
        window.localStorage.setItem('BeautyFaceSession', user)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Session Iniciada',
          showConfirmButton: false,
          timer: 1500
        })
        window.location = '../index.html'
      }
    })
    .catch(() => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '!Algo salió mal',
        showConfirmButton: false,
        timer: 1500
      })
    })
}
