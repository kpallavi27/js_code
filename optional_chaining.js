<<<<<<< HEAD
const users = [{ name: "Charlie" }];

console.log(users?.[0]?.name);       // Output: "Charlie"
console.log(users?.[1]?.name);       // Output: undefined (index 1 doesn't exist)

const emptyList = null;
=======
const users = [{ name: "Charlie" }];

console.log(users?.[0]?.name);       // Output: "Charlie"
console.log(users?.[1]?.name);       // Output: undefined (index 1 doesn't exist)

const emptyList = null;
>>>>>>> 90237e90a0e6cabcb8a371c774539c99c869d3d4
console.log(emptyList?.[0]);