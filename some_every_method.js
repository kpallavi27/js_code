const inventory = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Mouse", stock: 12 },
  { id: 3, name: "Keyboard", stock: 0 },  // Uh oh, this one is out of stock!
  { id: 4, name: "Monitor", stock: 3 }
];

// 1. Using some() to check if ANY item is out of stock (stock === 0)
const hasOutOfStockItems = inventory.some(product => product.stock === 0);
console.log("Are any items out of stock?", hasOutOfStockItems); 
// Output: true (because the Keyboard has 0 stock)

// 2. Using every() to check if EVERY item is fully stocked (stock > 0)
const isFullyStocked = inventory.every(product => product.stock > 0);
console.log("Are all items in stock?", isFullyStocked); 
// Output: false (because not every item has stock > 0, thanks to the Keyboard)