import Swal from 'sweetalert2'

export default function logout (loginIcon, logoutIcon, nickname) {
  logoutIcon.addEventListener('click', () => {
    fetch('./php/logout.php')
      .then(res => res.json())
      .then(data => {
        if (data === 'Logout') {
          loginIcon.classList.remove('hide')
          logoutIcon.classList.add('hide')
          nickname.innerHTML = 'Invitado'
          window.localStorage.removeItem('BeautyFaceSession')
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Session Cerrada',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  })
}
