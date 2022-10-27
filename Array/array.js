// Array 
let fruits = ["apple", "mango", "grapes"];
let numbers = [1, 2, 3, 43];
let mixed = [1, 2, 3, 4, "string", null, undefined];

console.log(fruits);
console.log(numbers);
console.log(mixed);

// change the array index value 
fruits[2] = "banana";
console.log(fruits);

// referance to the array 
console.log(typeof fruits);

// cheack Array korar jonno Array.isArray method use korte hbe,, 
let obj = {};
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

