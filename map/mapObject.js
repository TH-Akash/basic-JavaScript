// object Litaral 
// key--->string
// key--->sumble
const persone = {
  firstName: "Akash",
  age: 23,
  1: "one"
}
console.log(persone["firstName"]);
console.log(persone.firstName);
// for in loop itaraet kore
for (let key in persone) {
  // console.log(key);
  console.log(typeof key);

}

// Map ---> {key, value }store kore 
const persones = new Map();
console.log(persones);
persones.set('firstName', 'Akash');
persones.set('age', 23);
persones.set(1, 'one');
console.log(persones);
console.log(persones.get(1));
console.log(persones.get("firstName"));
console.log(persones.get("age"));

// key print kora ,,,
console.log(persones.keys());

// key print
for (let key of persones.keys()) {
  console.log(key, typeof key);
}
console.log("-----");



// cheack Array ?
for (let key of persones) {
  console.log(Array.isArray(key));
}

// map Distructring 

for (let [key, value] of persones) {
  console.log(key, value);
}
console.log("----");
// mapArray declear 
const mapArray = new Map([['firstName', "akash"], ["age", 23]]);
console.log(mapArray);

// map object store kore rakha  key,value 
const persone1 = {
  id: 1,
  firstName: "Tanvir"
}
const persone2 = {
  id: 2,
  firstName: "Akash"
}
const extraInfo = new Map();
extraInfo.set(persone1, { age: 8, gender: "Male" });
extraInfo.set(persone2, { age: 9, gender: "Female" })
console.log(persone1.id);

// get() age :8
console.log(extraInfo.get(persone1).age);
console.log(extraInfo.get(persone1).gender);

console.log(extraInfo.get(persone2).gender);


