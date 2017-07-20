console.log('Revising node js tutorial');

const fs = require('fs');
const os = require('os');
const testReq = require('./notes.js');


console.log(testReq.myMessage);
console.log(testReq.myFunc(2,3));
//var user = os.hostname();
//fs.appendFile('greetings.txt',`${user},Congrats you just did the first IO ops in NodeJS!`);
//console.log(user);
