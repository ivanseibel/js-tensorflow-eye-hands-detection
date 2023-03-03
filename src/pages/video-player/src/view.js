export default class View {

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