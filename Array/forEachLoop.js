// forEach loop 
// forEach number ,index pass kore 
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (number, index) {
  console.log(`index is ${index} number is ${number * 2}`);
});

// object use forEach method 
const users = [
  { firstName: "Akash", age: 23 },
  { firstName: "Tanvir", age: 22 },
  { firstName: "Hasan", age: 24 },
  { firstName: "Md", age: 25 }
]
users.forEach(function (user) {
  console.log(user.firstName);
})

// Arrow function forEach function
users.forEach(user => {
  console.log(user.age);
});
