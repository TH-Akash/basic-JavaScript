const persone = {
  name: "tanvir",
  age: 23,
  "persone hobbies": ["gitter", "sleeping", "Listensing"]
}

// for in loop  iterate loop 
for (let key in persone) {
  console.log(`${key} : ${persone[key]}`);
  console.log(key, " : ", persone[key]);
}
// cheack type check
console.log(typeof (Object.keys(persone)));
const vall = Array.isArray(Object.keys(persone));
console.log(vall);

// for of loop 
console.log("********");
for (let key of Object.keys(persone)) {
  console.log(`${key}: ${persone[key]}`);
}
