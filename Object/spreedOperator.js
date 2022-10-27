const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const newArray = [...array1, ...array2];// array spread
//const newArray = [..."1234556"]; //string itareat
console.log(newArray);

// spread operator object ,,
const obj1 = {
  key1: "value1"
  , key2: "value2"
}
const obj2 = {
  key3: "value3",
  key4: "value4"
}
// copy to object 
const newObj = { ...obj1, ...obj2 };
// add object 
const newObjAdd = { ...obj1, ...obj2,  key5: "value5" }

console.log(newObj);
console.log(newObjAdd);
