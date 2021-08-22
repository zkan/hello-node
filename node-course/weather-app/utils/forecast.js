const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current\?access_key\=f3cbc3c5605f1d274565b7fa5c8b8d83\&query\=' + latitude + ',' + longitude + '&unit=f'
  console.log(url)
  request({ url, json: true }, (error, { body }) => {
    if (error) {
       callback('Unable to connect to weatherstack service!', undefined)
    } else if (body.error) {
      const errorInfo = body.error.info
      callback(errorInfo, undefined)
    } else {
      console.log(body)
      const weather_descriptions = body.current.weather_descriptions
      const temperature = body.current.temperature
      const feelslike = body.current.feelslike

      const forecastResult = weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.'

      callback(undefined, {
        forecastResult
      })
    }
  })
}

module.exports = forecast
