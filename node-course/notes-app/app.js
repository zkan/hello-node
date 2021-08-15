const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!\n')
fs.appendFileSync('notes.txt', 'My name is Kan.')