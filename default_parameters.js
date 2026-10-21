function calculatePrice(price, quantity = 1) {
    return price * quantity;
}

console.log(calculatePrice(500, 3)); // 1500
console.log(calculatePrice(500));    // 500