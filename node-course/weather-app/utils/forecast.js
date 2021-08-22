const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current\?access_key\=f3cbc3c5605f1d274565b7fa5c8b8d83\&query\=' + latitude + ',' + longitude + '&unit=f'
  console.log(url)
  request({ url, json: true }, (error, response) => {
    if (error) {
       callback('Unable to connect to weatherstack service!', undefined)
    } else if (response.body.error) {
      const errorInfo = response.body.error.info
      callback(errorInfo, undefined)
    } else {
      console.log(response.body)
      const weather_descriptions = response.body.current.weather_descriptions
      const temperature = response.body.current.temperature
      const feelslike = response.body.current.feelslike

      const forecastResult = weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.'

      callback(undefined, {
        forecastResult
      })
    }
  })
}

module.exports = forecast
