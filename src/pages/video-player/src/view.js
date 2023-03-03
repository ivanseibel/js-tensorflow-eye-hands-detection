export default class View {

  enableButton() {
    this.#btnInit.disabled = false
  }


  updateStatus(status) {
    this.#statusElement.innerHTML = status
  }
}