// // sort number
// const number = [5, 9.12, 3000, 410];

// number.sort((a, b) => {
//   return a - b;
// });
// console.log(number);
// // String
// const array = ["aaa", "bSs", "Akash", "Hddd"];
// array.sort();
// console.log(array);

// price lowToHigh  HighTolow

const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 3100 },
  { productId: 3, productName: "p3", price: 100 },
  { productId: 4, productName: "p4", price: 3600 },
  { productId: 5, productName: "p5", price: 30 },
];
const LowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(LowToHigh);

// product price HighTolow
const HighToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
})
console.log(HighToLow);