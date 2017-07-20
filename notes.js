console.log('Own file which is required in app.js');

//console.log(module);

module.exports.myMessage = 'Hey this is Great!';

// module.exports.myFunc = function(){
//   console.log('inside my func');
//   return ' returning inside my func';
// }

module.exports.myFunc = (a,b) => {
  console.log('sum of numbers = '+(a+b));
  return a+b;
}
