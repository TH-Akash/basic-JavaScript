//premetive 
let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log("After increment value ");
console.log(num1);
console.log(num2);

// Refarnce value 
console.log("Refarnce value");
let array1 = ["apple", "banana"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("jackfood");
console.log("After the Refarnce value ");
console.log(array1);
console.log(array2);

// array clone or copy 
console.log("Array clone or copy");
let arr1 = ["item1", "item2", "item3"];
// // slice the array
// let arr2 = arr1.slice(0)

// spreed operator 
let arr2 = [...arr1, "item4", "item5"]

// // concat()
// let arr2 = [].concat(arr1)

console.log(arr1);
console.log(arr2);
arr1.push("item")
console.log(arr1 === arr2);