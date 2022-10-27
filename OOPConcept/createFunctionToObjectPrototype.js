// prototype
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is age ${this.age} years`;
};
createUser.prototype.is18 = function () {
  return this.age > 18;
}
createUser.prototype.single = function () {
  return `lal alala lall  `;
}
const user1 = createUser("tanvir", "Akash", 'tanvirakssh29@gmail.com', 21, "Dhaka");
const user2 = createUser("Akash", "Hasan", 'tanvirakssh29@gmail.com', 21, "Dhaka");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());