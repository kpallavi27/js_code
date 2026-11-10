const number = [10, 20, 30, 40];
const total = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(total);
