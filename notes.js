const fs = require('fs');

const getNotes = (note) => {
    return note
}

const removeNote = (title) => {
    const notes = loadNote()
    const check = notes.filter((note) => note.title !== title)
    
    if (notes.length <= check.length) {
        console.log("Remove failed");
    }else{
        console.log("Remove succesfuly");
    }
    saveNote(check)
}

const addNote = (title, body) => {
    const notes = loadNote()

    const checkDuplicateNote = notes.filter((note) => note.title === title)

    console.log("hai");
    debugger
    if (checkDuplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNote(notes)
        console.log("New note added!");
    }else{
        console.log("Title already use!");
    }

    
}

const loadNote = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
    
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNote = () => {
    const notes = loadNote()
    const list = notes.map(({title}) => title)
    console.log(list);
}

const readNote = (title) => {
    const notes = loadNote()
    const find = notes.find((note)=> note.title === title)
    if (find === undefined) {
        console.log("A note not found!");
    } else {
        console.log(find);
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote
}