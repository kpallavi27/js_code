// 1. Function with parameters and a return value (calculates total money)
function calculateTotalMoney(cash, savings) {
  const total = cash + savings;
  return total;
}

function spendMoney(currentBalance, spentAmount) {
  if (spentAmount > currentBalance) {
    return currentBalance;
  }
  return currentBalance - spentAmount; //it only runs when the if condition is false
}

function buildSummary(studentName, balance) {
  // return "student:" + studentName + "current Balance" + balance;
  return "Student: " + studentName + " | Current Balance: $" + balance;
}

const myCash = 50;
const mySavings = 100;

let walletBalance = calculateTotalMoney(myCash, mySavings);
console.log(buildSummary("priya", walletBalance))


walletBalance = spendMoney(walletBalance, 25);
console.log(buildSummary("Riya", walletBalance)); 
// Try spending more than available
walletBalance = spendMoney(walletBalance, 200);
console.log(buildSummary("Riya", walletBalance)); 




