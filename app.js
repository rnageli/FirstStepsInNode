console.log('Revising node js tutorial');

const fs = require('fs');
const os = require('os');

var user = os.hostname();
fs.appendFile('greetings.txt',`${user},Congrats you just did the first IO ops in NodeJS!`);
//console.log(user);
