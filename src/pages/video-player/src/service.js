import { prepareRunChecker } from "../../../lib/shared/util.js"
const { shouldRun } = prepareRunChecker({ timerDelay: 500 })

export default class Service {
      if (!shouldRun()) continue
  }
}