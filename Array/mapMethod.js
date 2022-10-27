// map Methods 
const numbers = [5, 6, 7, 8, 9];

const square = function (number) {
  return number * number;
}
const squareNumber = numbers.map(square);
console.log(squareNumber);

// map mehod Function pass 
const array = [1, 2, 3, 4, 5];

const arrayNumbersSquare = array.map(function (number) {
  return number * number;
});
console.log(arrayNumbersSquare);

//Arrow function MapMethod use 
const number = [10, 20, 30, 40, 50];

const arrowFunctionNumber = number.map((number, index) => {
  return `index ${index},${number + number}`;
});
console.log(arrowFunctionNumber);

// object store map Method
const users = [
  { firstName: "Tanvir", age: 23 },
  { firstName: "Hasan", age: 22 },
  { firstName: "Akash", age: 21 }
]
const objectStore = users.map((user) => {
  return user.firstName;
})
console.log(objectStore);