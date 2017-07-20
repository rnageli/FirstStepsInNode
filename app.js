console.log('Revising node js tutorial');

const fs = require('fs');
const os = require('os');
const testReq = require('./notes.js');
const _ = require('lodash');

console.log(_.uniq(['st1','st1','st1',2,2,3,3,4,5,6,'st2']));//removes duplicates
// console.log(testReq.myMessage);
// console.log(testReq.myFunc(2,3));
//var user = os.hostname();
//fs.appendFile('greetings.txt',`${user},Congrats you just did the first IO ops in NodeJS!`);
//console.log(user);
