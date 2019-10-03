const {test} = require('./test')
const {appendFileSync} = require('fs');
const {command, parse} = require('yargs');
const {addNote, removeNote} = require('./notes');

command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({title, body}) => {
        addNote({title, body})
    }
})


command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler: ({title}) => {
        removeNote(title)
    }
})

parse();