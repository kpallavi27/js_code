const cart = [
  { id: 1, name: "Sneakers", price: 50 },
  { id: 2, name: "T-Shirt", price: 20 },
  { id: 3, name: "Backpack", price: 40 }
];

// ---> find()<----------
const foundItem= cart.find(item =>item.id===3)
console.log(foundItem);

// ---> findIndex()<----------
const foundIndexItems= cart.findIndex(item => item.name ===  "Backpack")
console.log(foundIndexItems)