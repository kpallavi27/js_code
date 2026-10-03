var x = 10;
{
  var x = 10; // var is not block scoped or function varibale .
  let y = 20; //let is block scope variable .
  const z = 30; //const is also blocked scoped variable .
  console.log(x);
  console.log(y);
  console.log(z);
}
console.log(x);

// console.log(y); //error , we cannoy access it out of the block .
// console.log(z);
// blocked scoped means where the variable can accessed .
// let and const belong to the { } block, so they cannot be accessed outside it.
// var does not respect the block. It can be accessed outside the block (when not inside a function).
