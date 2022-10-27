// function Expression 
const functionExpression = function () {
  console.log("FunctionExpression");

}
functionExpression();

// function statement
const FabariteExpresion = function () {
  console.log("I love JavaScript...");
}
// call function
FabariteExpresion();

// sum 2 numbers
const sumTwoNumber = function (a, b) {
  return a + b;
}
const returnValue = sumTwoNumber(4, 5);
console.log(returnValue);

// 3 number input and sum function
// od or even
const isEven = function (number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(6));

// function
// input :array ,target(number)
//output index of array
const findArray = function (array, taget) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === taget) {
      return i;
    }
  }
  return -1;
}
var inputArray = [1, 2, 3, 4, 5];

const ans = findArray(inputArray, 3);
console.log(ans);
