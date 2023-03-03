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
    return controller.init()
  }

  async init() {
    console.log('Controller initialized')
  }
}