
const fs = require('fs');
const yargs = require('yargs');
//First node system requires, then npm modules and then local. Use a line break;
const notes = require('./notes.js');//Note will execute notes.js console log

//Using yargs
var yarg = yargs.argv;
console.log('yargs commands ', yarg);
console.log('yargs first command ',yarg._[0]);
console.log('key value pair: ',yarg.title);

var command = yarg._[0];
if(command ==='add'){
  notes.add(yarg.title,yarg.body);
}else if(command==='list'){
  var allNotes=notes.list();
  if(allNotes){
    console.log('found these notes', JSON.stringify(allNotes));
  }
}else if(command==='delete'){
  var msg=notes.delete(yarg.title);//node app.js delete --title="third note"
  console.log(msg);
}else if(command==='read'){
  var msg=notes.read(yarg.title);
  if(msg){
    console.log(`Reading note: ${msg.title}`);//ES 6 feature to embed objects into string
    console.log(`Note content: ${msg.body}`);
  }else{
    console.log('Note '+yarg.title+' doesnt exist');
  }
}
