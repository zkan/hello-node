const request = require('postman-request')

console.log('Starting')

setTimeout(() => {
  console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
  console.log('0 Second Timer')
}, 0)

console.log('Stopping')

const url = 'http://api.weatherstack.com/current\?access_key\=f3cbc3c5605f1d274565b7fa5c8b8d83\&query\=37.8267,-122.4233'

request({ url, json: true }, (error, response) => {
  //console.log(response)
  //const data = JSON.parse(response.body)
  //console.log(data)
  //console.log(data.current)

  console.log(response.body.current)
})
