// Destructuring in JavaScript is a way to extract values from arrays or properties from objects and store them directly into variables.
// Instead of writing more code to access each value, destructuring gives us a shorter way.

const user = {
  name: "Pallavi",
  role: "Developer",
};
const { name, role } = user;
console.log("name of user:",name);
console.log("role of user:",role);

