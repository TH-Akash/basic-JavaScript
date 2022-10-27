let fruits = ["banna", "apple", "grapes", "mango"];

let len = fruits.length;
console.log(len);

console.log(fruits[fruits.length - 1]);
console.log("-----");
for (let i = 0; i < len; i++) {
  console.log(fruits[i].toUpperCase());
}

// new array bananu 
let array2 = [];
for (let i = 0; i < fruits.length; i++) {
  array2.push(fruits[i]);
}
console.log(array2);

