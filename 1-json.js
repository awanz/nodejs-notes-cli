const fs = require('fs');
const book = {
    title: "How to rich",
    author: "Awan"
}
// console.log(book);

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);

// const parseJSON = JSON.parse(bookJSON)
// console.log(parseJSON);


const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const bookBuffer = fs.readFileSync('1-json.json')
const bookJSONRead = bookBuffer.toString()
const bookObject = JSON.parse(bookJSONRead)

bookObject.title = "How to be smart"
bookObject.author = "Awan smart"

const bookJSONToWrite = JSON.stringify(bookObject)
fs.writeFileSync('1-json.json', bookJSONToWrite)