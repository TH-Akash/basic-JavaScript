//apply method 

function about(hobby, crickter) {
  console.log(this.firstName, this.age, hobby, crickter);
}
const persone1 = {
  firstName: "Tanvir",
  age: 23
}
const persone2 = {
  firstName: "Akash",
  age: 22
}
about.apply(persone2, ["cricket", "Shakib All Hassan"]);
