// writing and readung json data

var fs = require('fs');

var originalNote = {
  title : 'First Note',// Keep in mind that : is  to be used and not =
  body : 'Things are getting a little bit heated.'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json",originalNoteString);

console.log('writing to file success. Starting to read from file notes.json');

var noteString = fs.readFileSync('notes.json');
console.log('Read from fiel finished.');
var noteObj = JSON.parse(noteString);

console.log('Reading from the note obj: Title is ',noteObj.title);
