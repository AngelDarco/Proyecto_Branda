export default function session (login, logout, nickname, session) {
  if (!session) return
  nickname.innerHTML = session
  login.classList.add('hide')
  logout.classList.remove('hide')
}
