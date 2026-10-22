const users = [{ name: "Charlie" }];

console.log(users?.[0]?.name);       // Output: "Charlie"
console.log(users?.[1]?.name);       // Output: undefined (index 1 doesn't exist)

const emptyList = null;
console.log(emptyList?.[0]);