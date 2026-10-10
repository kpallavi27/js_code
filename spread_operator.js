// The spread operator in JavaScript is written as three dots (...). Its job is to "unpack" 
// or "spread" out the items inside an array, object, or string so they can be easily copied, merged, or passed into functions.


const fruits = ["Apple", "Banana"];
const moreFruits = ["Cherry", ...fruits, "Date"];

console.log(moreFruits); 

const user= ["pallavi","vamshi"];
const add_user =["mahi",...user,"navya"]
console.log( add_user)
// Output: [ 'Cherry', 'Apple', 'Banana', 'Date' ]
// [ 'mahi', 'pallavi', 'vamshi', 'navya' ]