// every Method
const numbers = [2, 3, 4, 6, 8];

function isEvery(number) {
  return number % 2 === 0;
}
const ans = numbers.every(isEvery);
console.log(ans);

// ever Method use
const numbers1 = [2, 10, 4, 6, 8];
const ans2 = numbers1.every((number) => number % 2 === 0);
console.log(ans2);

// array object every method use
const userCart = [
  { productId: 1, productName: "Mobile", price: 29400 },
  { productId: 2, productName: "leptop", price: 33400 },
  { productId: 3, productName: "tv", price: 28400 },
];
const checkPrice = userCart.every((cartItem) => cartItem.price >= 25000);
console.log(checkPrice);
