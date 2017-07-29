var obj = {name: 'Ravi'};

var stringObj = JSON.stringify(obj);

console.log(typeof obj);//object
console.log(obj);//{name:'Ravi'} notice the single quotes here
console.log(typeof stringObj);//stringObj
console.log(stringObj);//{"name":"Ravi"} converted to souble quotes
