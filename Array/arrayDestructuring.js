// Array Desstructuring 
let myArray = ["item1", "item2", "item3", "item4"];

// let myarray1 = myArray[0];
// let myarray2 = myArray[1];
// let [myarray1, myarray2] = myArray;
//let [myarray1, myarray2, ...myNewArray] = myArray
let [, myarray1, , myarray2,] = myArray
console.log("value of myarray1 ", myarray1);
console.log("value of myarray2 ", myarray2);
// console.log(myNewArray);