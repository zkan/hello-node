const https = require('https')

const url = 'https://dog.ceo/api/breeds/image/random'

const request = https.request(url, response => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', error => {
  console.log('An error', error)
})

request.end()
