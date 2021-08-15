const fs = require('fs')
const { someName, add } = require('./utils')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!\n')
fs.appendFileSync('notes.txt', 'My name is Kan.')

const name = 'Kan'
console.log(name)

console.log(someName)

const sum = add(2, -4)
console.log(sum)