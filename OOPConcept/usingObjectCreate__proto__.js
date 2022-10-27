const userMethod = {
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
  const user = Object.create(userMethod);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const user1 = createUser("Tanvir", "Akash", 'tanvirakssh29@gmail.com', 21, "Dhaka");
const user2 = createUser("Akash", "tanvir", 'tanvirakssh29@gmail.com', 21, "Dhaka");

console.log(user1);
console.log(user1.about());