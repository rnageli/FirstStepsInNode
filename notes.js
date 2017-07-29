
const fs = require('fs');

var AddNote = (title, body) => {
  var notes = [];
  var note ={//just like the way we did for modules export.
    title,
    body
  };
  try{
    //if the app is run when the file doesn't exist
      notes = JSON.parse(fs.readFileSync("notes-node.json"));
  }catch(e){

  }
  //this is a ES6 feature to remove curly braces for one lined statements for arrow functions
  var duplicateTitles = notes.filter((note) => note.title === title);
  //filter is array method that uses a call back.
  // the above line is same as the below function
  //var duplicateTitles = notes.filer((note) => {note.title === title});
  if(duplicateTitles.length === 0){
    notes.push(note);
    fs.writeFileSync("notes-node.json",JSON.stringify(notes));
  }
}

var getAllNotes = () => {
  console.log('Will add code here to get all notes');
}
//when the name value pair naming is the same
// module.exports ={
//   AddNote,
//   getAllNotes
// };

//or if the mapping to the name is different ES6
module.exports ={
  add: AddNote,
  list: getAllNotes
};
