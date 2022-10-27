const numbers = [1, 2, 3, 4, 5];

function multiplyBy2(numbers, index) {
  console.log(`index is = ${index} number is  ${numbers * 2}`);
  // console.log(`${numbers} * 2= ${numbers * 2}`);

}
for (let i = 0; i < numbers.length; i++) {
  multiplyBy2(numbers[i], i);
}
