const morningTasks = ["Wake up", "Brush teeth"];
const eveningTasks = ["Read book", "Sleep"];

const fullDayRoutine = [
  ...morningTasks,
  "Eat breakfast", // added right in the middle
  ...eveningTasks
];

console.log(fullDayRoutine);
// ["Wake up", "Brush teeth", "Eat breakfast", "Read book", "Sleep"]