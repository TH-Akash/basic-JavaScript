// defolt perameter 
function addTwoNumbers(a, b) {
  if (typeof b == "undefined") {
    b = 0;
  }
  return a + b;
}
const ans = addTwoNumbers(4)
console.log(ans);

function addTwo(a, b = 0) {
  return a + b;
}
const ans1 = addTwo(4, 8);
console.log(ans1);
