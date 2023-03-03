onmessage = ({ data }) => {
  console.log('Message received from main script', data)
  postMessage({
    response: 'ok'
  })
}