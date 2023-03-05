import logout from './js/logout.js'
import session from './js/sesion.js'
import slider from './js/slider.js'

window.addEventListener('DOMContentLoaded', () => {
  const nickname = document.getElementById('usuario')
  const loginIcon = window.document.getElementById('login')
  const logoutIcon = window.document.getElementById('logout')

  session(loginIcon, logoutIcon, nickname)
  //   login(nickname)
  document.getElementById('login').addEventListener('click', function () {
    window.location.href = './html/login.html'
  })
  logout(loginIcon, logoutIcon, nickname)
  slider()
})
