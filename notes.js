console.log('Own file which is required in app.js');


var AddNote = (title, body) => {
  console.log('Adding note with title ',title,' and body ',body);
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
