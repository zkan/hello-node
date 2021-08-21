// Aync
setTimeout(() => {
  console.log('Two seconds are up')
}, 2000)

// Sync
const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter(name => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    }
    callback(data)
  }, 2000)
}

//const data = geocode('Philadelphia')
//console.log(data)

geocode('Philadelphia', data => {
  console.log(data)
})

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b
    callback(sum)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum)
})
