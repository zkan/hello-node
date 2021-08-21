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
  if (error) {
    console.log('Unable to connect to weather service')
  } else if (response.body.error) {
    const errorInfo = response.body.error.info
    console.log(errorInfo)
  } else {
    //console.log(response)
    //const data = JSON.parse(response.body)
    //console.log(data)
    //console.log(data.current)

    console.log(response.body.current)

    const weather_descriptions = response.body.current.weather_descriptions
    const temperature = response.body.current.temperature
    const feelslike = response.body.current.feelslike
    console.log(weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
  }
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemthbiIsImEiOiJja3NsYWh0dzAwZ2o2Mm9zb21sZjhkdHhrIn0.j-e0byTFMGhTduZpwB4LHg'

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to mapbox service')
  } else {
    console.log(response.body)
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(longitude, latitude)
  }
})

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiemthbiIsImEiOiJja3NsYWh0dzAwZ2o2Mm9zb21sZjhkdHhrIn0.j-e0byTFMGhTduZpwB4LHg'
  request({ url, json: true }, (error, response) => {
    if (error) {
       callback('Unable to connect to mapbox service!', undefined)
    } else if (response.body.features.length === 0) {
       callback('Unable to find location. Try another search.', undefined)
    } else {
      console.log(response.body)
      const longitude = response.body.features[0].center[0]
      const latitude = response.body.features[0].center[1]
      const location = response.body.features[0].place_name
      console.log(longitude, latitude)

      callback(undefined, {
        latitude,
        longitude,
        location,
      })
    }
  })
}

geocode('Philadelphia', (error, data) => {
  console.log('Geocode Error:', error)
  console.log('Geocode Data:', data)
})
