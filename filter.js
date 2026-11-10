// const numbers = [5, 12, 8, 130, 44];
// const filterNumber = numbers.filter((num) => num > 10);
// console.log(filterNumber);


function nums(...number) {
  return number.filter((num) => num > 10);
}
console.log(nums(5, 12, 8, 130, 44));

