//binding  --> function store kore pore call korte pari
function myFunction(hobby, favCreicketer) {
  console.log(this.firstName, this.age, favCreicketer);
}
const persone1 = {
  firstName: "Tanvir",
  age: 23
}
const persone2 = {
  firstName: "Akash",
  age: 21
}
const myAns = myFunction.bind(persone1, "cricket", "Shakib All Hassan");
myAns();

// bind Method uses 
const user1 = {
  firstName: "Hasan",
  age: 23,
  about: function () {
    console.log(this.firstName, this.age);
  }
}
const myFunc = user1.about.bind(user1);
myFunc();

