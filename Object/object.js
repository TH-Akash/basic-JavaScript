// create object 
const persone = {
  name: "akash",
  age: 23,
  hobbies: ["coding", "sleeping", "cricket"]
}
console.log(persone);
// how to access data from object 
console.log(persone.name);
console.log(persone.age);
console.log(persone.hobbies[0]); // array print 
// add object 
persone.gender = "male";
console.log(persone);

// string  access to object 
console.log(persone["name"]);
console.log(persone["age"]);

// dot nitation and breack notation 
const object = {
  name: "tanvir",
  education: "bse of cse",
  "persone hobbies": ["game", "cricket", "foodball"]
}
// dote notation 
console.log(object.name);
// breack notation 
console.log(object["persone hobbies"]);

// add object key and value 
const key = "email";
persone[key] = "tanvirakash29@gmail.com";
console.log(persone);

