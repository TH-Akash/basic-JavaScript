// Class keyWords
class Animel {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is Eatting`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
class Dog extends Animel {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  run() {
    return `${this.name}is eunning  ${this.speed}`;
  }
}
const animel1 = new Animel("tom", 3);

console.log(animel1);
console.log(animel1.eat());

const dog1 = new Dog("tomy", 2, 3);
console.log(dog1);
console.log(dog1.isCute());
