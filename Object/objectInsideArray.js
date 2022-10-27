const users = [
  { userId: 1, firstNme: "Tanvir", gender: "male" },
  { userId: 2, firstNme: "Hasan", gender: "male" },
  { userId: 3, firstNme: "Akash", gender: "male" }
]
// for of loop 
for (let user of users) {
  console.log(user.firstNme);
}

// nested Distructring 
console.log("nested Distructring ");
const [{ firstNme: user1firstName, userId }, , { gender: user3gender }] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);