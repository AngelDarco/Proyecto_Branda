import addProducts from './addProducts.js'

document.addEventListener('DOMContentLoaded', () => {
  const localStorageSession = window.localStorage.getItem('BeautyFaceSession')

  document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', (e) => {
      addProducts(e, localStorageSession)
    })
  })
})
