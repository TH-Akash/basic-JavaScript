function createObject(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return (`${this.firstName} is ${this.age} years`);
  };
  user.is18 = function () {
    return this.age >= 18;
  }
  return user;

}
const user1 = createObject("Tanvir", "Akash", "tanvirakash29@gmail.com", 23, "Gulshan 1");
console.log(user1);
user1.about();
// console.log(aboutInfo);

const is18 = user1.is18();
console.log(is18);