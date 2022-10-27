// new key word
function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is age ${this.age} years`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return `la la la `;
};
const user1 = new CreateUser("firstName", "lastName", "email", "Akash", "tanvirakssh29@gmail.com", 21, "Dhaka");
console.log(user1);
console.log(user1.about());

// CreateUser er bitor key dekhte caile
for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
