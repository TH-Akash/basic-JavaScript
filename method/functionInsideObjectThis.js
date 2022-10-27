// method 
// function insede object 

const persone = {
  firstName: "Tanvir",
  age: 23,
  about: function personeInfo() {
    console.log(`persone name is ${this.firstName} and age is ${this.age}`);
  }
}
persone.about();

console.log("----persone--1--");
// many object use function object

function personeInfo() {
  console.log(`persone name is ${this.firstName} and age is ${this.age}`);
}
const persone1 = {
  firstName: "Akash",
  age: 22,
  about: personeInfo
}

const persone2 = {
  firstName: "Hasan",
  age: 21,
  about: personeInfo
}
persone1.about();
// console.log("----persone1--2--");
persone2.about();

