export default function handlerSpa (hash) {
  const container = window.document.getElementById('containerSpa')
  const frame = container.children[0]
  switch (hash) {
    case '#car':
      frame.setAttribute('src', './html/carro.html')
      window.location.href = '#containerSpa'
      break
    case 'acne':
      frame.setAttribute('src', './html/acne.html')
      window.location.href = '#containerSpa'

      break
    case 'antioxidantes':
      frame.setAttribute('src', './html/antioxidantes.html')
      window.location.href = '#containerSpa'

      break
    case 'hidratacion':
      frame.setAttribute('src', './html/hidratacion.html')
      window.location.href = '#containerSpa'

      break
    case 'maquillaje':
      frame.setAttribute('src', './html/maquillaje.html')
      window.location.href = '#containerSpa'

      break
    case 'tonicos':
      frame.setAttribute('src', './html/tonicos.html')
      window.location.href = '#containerSpa'

      break

    default:
      break
  }
}
