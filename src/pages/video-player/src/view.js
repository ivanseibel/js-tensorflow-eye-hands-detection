export default class View {
  #btnInit = document.querySelector('#init')
  #statusElement = document.querySelector('#status')

  enableButton() {
    this.#btnInit.disabled = false
  }

  configureOnBtnClick(onClick) {
    this.#btnInit.addEventListener('click', onClick)
  }

  updateStatus(status) {
    this.#statusElement.innerHTML = status
  }
}