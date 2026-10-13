function sum(...numbers) {
  // numbers is an array containing all arguments passed to the function
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2));            // Output: 3
console.log(sum(10, 20, 30, 40));  // Output: 100