const fs = require('fs')
require('./utils')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!\n')
fs.appendFileSync('notes.txt', 'My name is Kan.')

const name = 'Kan'

console.log(name)