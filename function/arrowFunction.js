// arrow function 
const ArrowFunction = (number1, number2) => {
  return number1 + number2;
}
const ans = ArrowFunction(3, 5);
console.log(ans);

// even or odd 
const isEven = (number) => {
  return number % 2 === 0;
}
const ansEO = isEven(5);
console.log(ansEO);

// Linear search arrowFunction ()
const LinearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const ansSearch = LinearSearch([1, 3, 4, 5, 6], 6)
console.log(ansSearch);

// shortCut ArrowFunction ()
const shortCut = number => number % 2 == 0;
console.log(shortCut(4));

// ArrowFunction string ()
const firstChar=anyString=>anyString[0];
console.log(firstChar("akash"));
