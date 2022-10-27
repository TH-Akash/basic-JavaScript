//find Method
const myArray = ["Akash", "tanvir", "SWE", "Hasan", "cse"];

function isLength(string) {
  return string.length === 3;
}
const ans = isLength("cse");
console.log(ans);

// find Method
const ans1 = myArray.find(isLength);
console.log(ans1);

// Arrow Functions
const ans2 = myArray.find((string) => string.length === 3);
console.log(ans2);

// object find Method
const users = [
  { userId: 1, userName: "Akash" },
  { userId: 2, userName: "Tanvir" },
  { userId: 3, userName: "Hasan" },
  { userId: 4, userName: "THA" },
];
const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
