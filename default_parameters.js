
function calculatePrice(price, quantity = 1) {
    return price * quantity;
}

console.log(calculatePrice(200, 4)); // 1500

function calculatePrice(price, quantity = 1) {
    return price * quantity;
}

console.log(calculatePrice(200, 4)); // 1500
console.log(calculatePrice(200));    // 500
