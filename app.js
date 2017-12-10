
const fs = require('fs');
const yargs = require('yargs');
//First node system requires, then npm modules and then local. Use a line break;
const notes = require('./notes.js');//Note will execute notes.js console log

//Using yargs
var yarg = yargs
    .command('add','Add a new note',{
      title:{
        description: 'Title of the note',
        demand: true,
        alias: 't'
      },
      body:{
        demand:true,
        description:'Body of the note',
        alias:'b'
      }
    })
    .command('list','List all notes saved')
    .command('read','Read a single note',{
      title:{
        demand:true,
        description:'Enter the title of the note to read',
        alias: 't'
      }
    })
    .command('delete','Delete an existing note',{
      title:{
        description:'Enter the title of the note to be deleted',
        demand: true,
        alias: 't'
      }
    })
    .help()
    .argv;//note the new line convention

var command = yarg._[0];
if(command ==='add'){
  notes.add(yarg.title,yarg.body);
}else if(command==='list'){
  var allNotes=notes.list();
  if(allNotes){
    console.log('Printing notes');
    console.log('------');
    allNotes.forEach((note) => notes.print(note));
  }
}else if(command==='delete'){
  var msg=notes.delete(yarg.title);//node app.js delete --title="third note"
  console.log(msg);
}else if(command==='read'){
  var msg=notes.read(yarg.title);
  debugger;
  if(msg){
    notes.print(msg);
  }else{
    console.log('Note '+yarg.title+' doesnt exist');
  }
}
