export default class Controller {
  #view
  #worker
  #blinkCounter = 0
  #camera

  constructor({ view, worker, camera }) {
    this.#view = view
    this.#worker = this.#configureWorker(worker)
    this.#camera = camera

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

  #configureWorker(worker) {
    let ready = false
    worker.onmessage = (msg) => {
      if (msg.data === 'READY') {
        console.log('Worker ready')
        this.updateStatus('Ready to process images')
        this.#view.enableButton()
        ready = true
        return;
      }

      const blinked = msg.data
      this.#blinkCounter += 1
      this.#view.togglePlayPause()
      console.log('blinked', blinked)
    }

    return {
      send(msg) {
        if (!ready) return

        worker.postMessage(msg)
      }
    }
  }

  updateStatus(text) {
    const times = `     - blinked ${this.#blinkCounter} times`
    this.#view.updateStatus(`logger: ${text}`.concat(this.#blinkCounter > 0 ? times : ''))
  }

  loop() {
    const video = this.#camera.video
    const img = this.#view.getVideoFrame(video)

    this.#worker.send(img)

    this.updateStatus(`Blinked ${this.#blinkCounter} times`)

    setTimeout(() => this.loop(), 500)
  }

  onBtnClick() {
    this.updateStatus('Initializing...')
    this.#blinkCounter = 0
    this.loop()
  }

}