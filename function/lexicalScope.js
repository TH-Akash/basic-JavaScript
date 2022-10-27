// Global scope
var myVar = "value1";
function myApp() {
  // lexical scope
  function myFunc() {
    const myFunc2 = () => {
      console.log("inside myFunc : ", myVar);
    }
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}
myApp();
