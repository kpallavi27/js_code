function serveHot(dishName) {
  console.log("Serving " + dishName + " hot on a plate!");
}

function packLunchbox(dishName) {
  console.log("Packing " + dishName + " into a lunchbox!");
}

function cookDish(afterCooking) {
  const food = "Pasta";
  console.log("Cooking " + food + "...");
  afterCooking(food);
}

cookDish(serveHot);
cookDish(packLunchbox);
