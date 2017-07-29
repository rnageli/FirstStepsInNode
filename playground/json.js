// to convert json string to an object

var myName = '{"name":"Ravi","age":23}';

var person = JSON.parse(myName);
//Prints just the opposite of the previous commit
//parse and JSON.stringify
console.log(typeof myName);//string
console.log(myName);//{"name":"Ravi","age":23}
console.log(typeof person);//object
console.log(person);//{name:'Ravi',age:23}
