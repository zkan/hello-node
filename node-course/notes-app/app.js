const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const { someName, add } = require('./utils')
const getNotes = require('./notes')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!\n')
fs.appendFileSync('notes.txt', 'My name is Kan.')

const name = 'Kan'
console.log(name)

console.log(someName)

const sum = add(2, -4)
console.log(sum)

const notes = getNotes()
console.log(notes)

console.log(validator.isEmail('zkan@hey.com'))
console.log(validator.isEmail('zkan@hey'))

console.log(chalk.green('Success!'))
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))