const request = require('postman-request')

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

module.exports = geocode
