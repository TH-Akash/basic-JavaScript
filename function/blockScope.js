// let blocksScope
function myApp() {
  if (true) {
    var firstName = "akash";
    console.log(firstName);
  }
  {
    if (true) {
      const lastName = "Tanvir";
      console.log(lastName);
    }
  }
  // console.log(firstName);
}
myApp();

// Gobal scope 
function globalScope() {
  if (true) {
    var firstName = "Tanvir";
    console.log(firstName);
  }
  if (true) {
    console.log(firstName);
  }
  console.log(firstName);

}
globalScope();
