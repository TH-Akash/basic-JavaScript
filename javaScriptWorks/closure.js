// clouser 
function printfullFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;

}
const ans = printfullFullName("Tanvir", "Akash");
ans();

// closure exampul 2 
function hello(x) {
  const a = "vlu1";
  const b = "vlu2";
  return function () {
    console.log(a, b, x);
  }
}
const value = hello("akash");
value();