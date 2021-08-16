const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const { someName, add } = require('./utils')
const { getNotes, addNote, removeNote } = require('./notes')

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
console.log(chalk.red.inverse('Failed!'))
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// Get args with process
console.log(process.argv)
console.log(process.argv[2])

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note')
} else if (command === 'remove') {
    console.log('Removing note')
}

// Get args with yargs

// Customize yargs version then run `node app.js --version`
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title:', argv.title)
        console.log('Body:', argv.body)

        addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Removing the note!')
        removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a note')
    }
})

// console.log(yargs.argv)
yargs.parse()