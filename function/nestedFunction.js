function app() {
  const myFunc = () => {
    console.log("hello Nested Function");
  }
  const sumTwoNumber = (number1, number2) => {
    return number1 + number2;
  }
  const mulTwoNumber = (number1, number2) => number1 * number2;
  console.log("inside app...");
  myFunc();
  console.log(sumTwoNumber(5, 6));
  console.log(mulTwoNumber(3, 3));
}
app();