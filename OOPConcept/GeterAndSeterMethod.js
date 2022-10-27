class Persone {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const persone1 = new Persone("Akash", "hasan", 23);
console.log(persone1);
console.log(persone1.fullName());//method call 
// property call
console.log(persone1.firstName);
console.log(persone1.age);


console.log("-------");
// get and set method 
class Parent {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

}


const parent = new Parent("Akash", "hasan", 23);
console.log(parent.fullName) // property moto use  korle method er age get likhte hbe 
console.log(parent.firstName);
console.log(parent.lastName);

//set name Change 
// parent.setName("Tanvir", "Hasan");

parent.firstName = "Tanvir";
parent.lastName = "Hasan";
console.log(parent.firstName);
console.log(parent.lastName);

console.log("++++++++");
class Child {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullNameMethod(fullName) {
    const [firstName, lastName] = fullName.split('  ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// split 
const child = new Child("Akash", "hasan", 23);
console.log(child.fullName);
console.log(child);
child.fullNameMethod = "Tanvir", "Akash";
console.log(parent);

