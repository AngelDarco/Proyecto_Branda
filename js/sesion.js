export default function session (login, logout, nickname) {
  const session = window.localStorage.getItem('BeautyFaceSession')

  if (!session) return
  nickname.innerHTML = session
  login.classList.add('hide')
  logout.classList.remove('hide')
}
