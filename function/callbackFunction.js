// callback funtion 
function myFunc2(name) {
  console.log("inside myFunc 2...");
  console.log(`your name is ${name}`);

}
function myFunc(callback) {
  console.log("hello Callback Function start");
  myFunc2("Akash")
}
myFunc(myFunc2);

// functiom return function 
function myFunction() {
  function hello() {
    // console.log("hello function");
    return "hello function";
  }
  return hello;
}
const ans = myFunction();
ans();
console.log(ans());
