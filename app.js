import logout from './js/logout.js'
import session from './js/sesion.js'
import slider from './js/slider.js'
import handlerSpa from './js/handlerSpa.js'

window.addEventListener('DOMContentLoaded', () => {
  const localStorageSession = window.localStorage.getItem('BeautyFaceSession')
  const nickname = document.getElementById('usuario')
  const loginIcon = window.document.getElementById('login')
  const logoutIcon = window.document.getElementById('logout')

  // comprove and show session
  session(loginIcon, logoutIcon, nickname, localStorageSession)

  //   login event
  document.getElementById('login').addEventListener('click', function () {
    window.location.href = './html/login.html'
  })

  // logout function
  logout(loginIcon, logoutIcon, nickname)

  // slider function
  slider()

  // shopping car
  document.getElementById('carro').addEventListener('click', () => {
    if (!localStorageSession) {
      // eslint-disable-next-line
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Debes Iniciar Sesion Primero',
        showConfirmButton: false,
        timer: 1000
      })
    } else {
      handlerSpa('#car')
    }
  })

  // hash events
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash
    handlerSpa(hash)
  })

  // filter event
  const filter = window.document.getElementById('filter')
  filter.addEventListener('change', () => {
    handlerSpa(filter.options[filter.selectedIndex].text)
  })
})
