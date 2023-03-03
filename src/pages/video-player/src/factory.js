import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"
import Camera from "../../../lib/shared/camera.js"
import { supportsWorkerType } from "../../../lib/shared/util.js"

async function getWorker() {
  if (supportsWorkerType()) {
    console.log('Web worker supported')
    const worker = new Worker('./src/worker.js', { type: 'module' })
    return worker;
  }

  const worckerMock = {
    postMessage: () => { },
    onmessage: () => { },
  }

  console.log('Web worker not supported')
  return worckerMock
}

const worker = await getWorker()

const [rootPath] = window.location.href.split('/pages/')
const camera = await Camera.init()

const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View(),
      service: new Service({}),
    })
  },
}

export default factory