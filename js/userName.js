document.addEventListener('DOMContentLoaded', () => {
  const localStorageSession = window.localStorage.getItem('BeautyFaceSession')
  const user = document.getElementById('usuario')
  if (user) {
    if (localStorageSession) { user.innerHTML = localStorageSession } else user.innerHTML = 'Invitado'
  }
})
