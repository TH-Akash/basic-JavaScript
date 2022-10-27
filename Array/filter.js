// filter Methods 
const number = [1, 2, 3, 4, 5, 6];

const isOdd = function (number) {
  if (number % 2 === 0) {
    return number;
  }

}
const oddNumber = number.filter(isOdd);
console.log(oddNumber);

const isEven = function (number) {
  return number % 2 !== 0;
}
const evenNumber = number.filter(isEven);
console.log(evenNumber);

// callback Function EvenNumber filter
const callBackEvenNumber = number.filter((number) => {
  return number % 2 !== 0;
});
console.log(callBackEvenNumber);

// callback Function oddNumber filter
const callBackOddNumber = number.filter((number) => {
  return number % 2 === 0;
});
console.log(callBackOddNumber);