// resduse Method 
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// object side reduse Method used 
const userCart = [
  { productId: 1, productName: "mobile", price: 13000 },
  { productId: 2, productName: "leptop", price: 50000 },
  { productId: 3, productName: "tv", price: 30000 }

]
const totalAmount = userCart.reduce((totalPrice, currentValue) => {
  return totalPrice + currentValue.price;
}, 0);
console.log(totalAmount);