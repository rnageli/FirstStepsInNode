console.log('Revising node js tutorial');

//const fs = require('fs');
//const os = require('os');
const yargs = require('yargs');
//First node system requires, then npm modules and then local. Use a line break;
const notes = require('./notes.js');//Note will execute notes.js console log

//Using command line arguments
var command = process.argv;//NOte arguments are stored in process object
//First argument is node and second is app.js in this case
console.log('command line argument'+command[2]);
//WHere command line struggles
console.log('Will need to parse in order to fetch key value pairs',command[3]);
//const _ = require('lodash');

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
