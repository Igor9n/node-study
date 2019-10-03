const {writeFileSync, readFileSync} = require('fs');

const addNote = ({title, body}) => {
     const notes = loadNotes();
     const duplicatedNotes = notes.filter(note => note.title === title);

     if (duplicatedNotes.length === 0) {
         notes.push({
             title,
             body
         })

         saveNotes(notes);
         console.log('Notes saved!');
     } else {
         console.log('Node title taken!');
     }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log('Note removed!');
        saveNotes(notesToKeep);
    } else {
        console.log('Note not found');
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote,
    removeNote
}