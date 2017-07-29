console.log('Writing to a file test');

const fs = require('fs');
const yargs = require('yargs');
//First node system requires, then npm modules and then local. Use a line break;
const notes = require('./notes.js');//Note will execute notes.js console log

//Using yargs
var yarg = yargs.argv;
console.log('yargs commands ', yarg);
console.log('yargs first command ',yarg._[0]);
console.log('key value pair: ',yarg.title);

if(yarg._[0]=='add'){
  notes.add(yarg.title,yarg.body);
}else if(yarg._[0]=='list'){
  notes.list();
}
