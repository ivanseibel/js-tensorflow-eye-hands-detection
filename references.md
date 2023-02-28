# MORE RESOURCES

- [Official Google course on Machine Learning for Web Developers (Web ML)](https://youtube.com/playlist?list=PLOU2XLYxmsILr3HQpqjLAUkIPa5EaZiui)
- [Projects made with TensorFlow](https://youtube.com/playlist?list=PLQY2H8rRoyvzSZZuF0qJpoJxZR1NgzcZw)
- [Training ML on Google](https://teachablemachine.withgoogle.com/)
- [Code for Blink calculation](https://github.com/monaca-samples/blink-to-text/blob/f3d578ff641298913833b04e98e854bf1cfe38e1/src/js/blinkPrediction.js)
- [Used database](https://www.kaggle.com/code/vikassingh1996/netflix-movies-and-shows-plotly-recommender-sys/data)
- [Convert video to canvas](https://stackoverflow.com/questions/64249599/how-to-run-handpose-tfjs-model-in-web-worker)
- [TensorFlow blog about iris detection](https://blog.tensorflow.org/2020/11/iris-landmark-tracking-in-browser-with-MediaPipe-and-TensorFlowJS.html)
- [TensorFlow lib: face-landmarks-detection](https://github.com/tensorflow/tfjs-models/blob/master/face-landmarks-detection)
- [Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Module workers](https://web.dev/module-workers/)
- [Check browser compatibility](https://caniuse.com)
- [Another example doing blink detection](https://selvamsubbiah.com/mediapipe-iris-detection-in-tensorflow-js/)
- [Identifying Morse code with eye detection](https://medium.com/the-web-tub/recognising-eye-blinking-with-tensorflow-js-3c02b738850d)
- [Layout used for the website](https://codepen.io/Gunnarhawk/pen/vYJEwoM)
- [Explanation of why WebGL, CPU, WebAssembly](https://youtu.be/3ive-w7oUis?t=333)
- [Gestures file to copy](https://github.com/andypotato/rock-paper-scissors/blob/54add341dbe83287c8ede69fbb006149a8145dd9/src/js/Gestures.js)
- [Possible issue when using webworker in hands.js](https://github.com/tensorflow/tfjs/issues/7380)
- [Open PR in fingerpose](https://github.com/andypotato/fingerpose/pull/25)
- [Erick Wendel's fingerpose](https://github.com/ErickWendel/fingerpose)
- [Jokenpo](https://github.com/andypotato/rock-paper-scissors)
- [TensorFlow HandPoseDetection diagram](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection#keypoint-diagram)
- [Solar Hands project](https://github.com/liady/solar-hands)
- [Tensorflow API finger indices](https://github.com/tensorflow/tfjs-models/tree/a345f0c58522af25d80153ec27c6e999e45fdd42/hand-pose-detection#keypoint-diagram)
- [elementFromPoint API](https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint)
  
### Dependencies of worker.js

```js
import "https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js"
import "https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js"
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js"
import "https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js"
```

### Imports from handGestureFactory file:

```js
import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core@4.2.0/dist/tf-core.min.js"
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@3.7.0/dist/tf-backend-webgl.min.js"
import "https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/hands.min.js"
import "https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection@2.0.0/dist/hand-pose-detection.min.js"
import "https://cdn.jsdelivr.net/npm/fingerpose@0.1.0/dist/fingerpose.min.js"
```