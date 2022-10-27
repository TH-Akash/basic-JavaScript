// rest perameter 
function myFunc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
myFunc(1, 2, 3, 4, 5, 6);

//sum allNumbers  rest perameter 
console.log("------");
function sumAllNumber(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}
const ans = sumAllNumber(10, 20, 30, 40);
console.log(ans);

// parameter Disturctring function
const persone = {
  firstName: "akash",
  gender: "Male",
  age: 23
}
function printInfo({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}
printInfo(persone);