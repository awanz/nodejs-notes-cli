// const fs = require('fs');

// fs.writeFileSync('test.txt', 'Hello awan')

// fs.appendFileSync('test.txt', '\nHai awan')

// const add = require('./utils');

// console.log(add(1,2));

const notes = require('./notes');

// console.log(notes("hai"));

// const validator = require('validator');

// console.log(validator.isEmail("awan@m.a"));

// const chalk = require('chalk');

// import chalk from "chalk"

// const text = chalk.red('Hello world yes!')
// console.log(text);

// import yargs from 'yargs'

// yargs.version("1.0.22")

const yargs = require('yargs');

yargs.version("1.1.0")

yargs.command({
    command: 'add',
    decsription: 'Add a new note',
    builder: {
        title:{
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            description: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    decsription: 'Remove a new note',
    builder: {
        title: {
            description: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    decsription: 'List your note',
    handler(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    decsription: 'Read a note',
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()