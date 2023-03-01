# Gesture Controller with Javascript and Tensorflow.js

## Preview

<img width=100% src="./src/assets/demo-template-lg.gif">

## Pre-reqs

- Node.js v19.6 is recommended.
- Unix environment is recommended (Linux or Mac).

## Running

- Clone this repo
- Go to the folder that contains the `package.json` file and run `npm ci` to restore the packages
- Execute `npm start` and then go to your browser in [http://localhost:3000](http://localhost:3000) to see the page above

## Checklist Features

- Titles List
  - [x] Search field should not freeze when typing search term
  - [ ] Should draw the hands on the screen and make elements in the background clickable
  - [ ] Should execute scroll up when using open hands 🖐
  - [ ] Should execute scroll down when using closed hands ✊
  - [ ] Should execute click on the nearest element when using pinch gesture 🤏🏻
  - [ ] When moving elements on the screen, should trigger **:hover** event on elements in context

- Video Player
  - [ ] Should be able to play/pause videos with a blink of an eye 😁
  - [ ] All the Machine Learning processing should be done via Web worker

### Extras

- [ ] Differentiate blink between left and right eye and update log to show which eye blinked.
- [ ] Recognize gestures of individual hands and print on log

### References:

[References](./references.md)

### FAQ

- Webgl is not supported on this device
  - Type chrome://gpu/ in Chrome to verify if the webgl is enabled.
  - Possible fixes:
    1. Option 1: Enable hardware acceleration when available
       -  Chrome => Settings > System > Use hardware acceleration when available
       -  Firefox => Browser options > Performance > Use hardware acceleration when available
    2. Option 2: Update video driver
       - See details on [webgl-is-not-supported-on-chrome-firefox](https://www.thewindowsclub.com/webgl-is-not-supported-on-chrome-firefox)
    3. Option 3: Change WebGL to CPU (slower) or Web Assembly
       - https://blog.tensorflow.org/2020/03/introducing-webassembly-backend-for-tensorflow-js.html
  
### Layout credits

Interface based on the [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) project by [gunnarhawk](https://github.com/Gunnarhawk)

### Project credits

This project was forked and adapted from [Erik Wendel's course - Semana Javascript Expert 7](https://github.com/erickWendel/semana-javascript-expert07)