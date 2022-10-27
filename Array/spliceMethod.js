// splice method 

const myArray = ["item1", "item2", "item3"];
// splice(start, delect, insert)
// delect Array 
const delectItem = myArray.splice(1, 1);
console.log(delectItem);
console.log(myArray);

// insert Item 
myArray.splice(0, 0, "insertItem");
console.log(myArray);

// Insert And Delect Item 
const InsertDelectitem = myArray.splice(2, 1, "Item 5", "Item6");
console.log(InsertDelectitem);
console.log(myArray);


