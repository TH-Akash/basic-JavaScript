// create function object to 2
const userMethods = {
  about: function () {
    return `${this.firstName} is age ${this.age} years`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return 'toon na na na lala';
  }
}

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  user.sing = userMethods.sing;
  return user;

}
const user1 = createUser("Tanvir", "Akash", 'tanvirakssh29@gmail.com', 21, "Dhaka");
const user2 = createUser("Akash", "Akash", 'tanvirakssh29@gmail.com', 21, "Dhaka");
const user3 = createUser("Hasan", "Akash", 'tanvirakssh29@gmail.com', 21, "Dhaka");
console.log(user1.about());
console.log(user3.sing());