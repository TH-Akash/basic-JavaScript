//set 
const numbers = new Set([1, 2, 3, 4, 4, 5]);
console.log(numbers);

const item = new Set();
item.add(1);
item.add(2);
item.add(["Item1", "item2"]);
item.add(["Item1", "item2"]);// add hbe karon memory addres
item.add(numbers);
item.add(numbers);// add hbe nah ,, karon akoi memory addres

console.log(item);

if (numbers.has(2)) {
  console.log("2 is present");
} else {
  console.log("value not present");
}
console.log(numbers);

//iterable 
// users.forEach(user => {
//   console.log(user.age);
// });

// forEach loop 
numbers.forEach(number => {
  console.log(number);

});
// for of loop 
for (let number of numbers) {
  console.log(number);
}

//use set array 
const myArray = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqValue = new Set(myArray);
console.log(uniqValue);

console.log(uniqValue.size);
//length 
let length = 0;
for (let element of uniqValue) {
  length++;
}
console.log(length);