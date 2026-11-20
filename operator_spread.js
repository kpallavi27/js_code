const fruits = ["Apple", "Banana", "orange"];
const moreFruits = ["Cherry", ...fruits, "Date"];
console.log(moreFruits);

const spreadUsers = ["pallavi", "vamshi"];
const add_user = ["mahi", ...spreadUsers, "navya"];
console.log(add_user); // Output: [ 'Cherry', 'Apple', 'Banana', 'Date' ]
// [ 'mahi', 'pallavi', 'vamshi', 'navya' ]
