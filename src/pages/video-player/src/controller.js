export default class Controller {
  #view
  #service

  constructor({ view, service }) {
    this.#view = view
    this.#service = service

    this.#view.configureOnBtnClick(this.onBtnClick.bind(this))
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.updateStatus('Not yet initialized, click the button to initialize.')
    return controller.init()
  }

  async init() {
    console.log('Controller initialized')
  }

  updateStatus(text) {
    this.#view.updateStatus(`logger: ${text}`)
  }

  onBtnClick() {
    this.updateStatus('Initializing...')
  }
}