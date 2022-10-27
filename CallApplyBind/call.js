// coll Replected 
const user1 = {
  firstName: "Tanvir",
  age: "20",
  about: function () {
    console.log(this.firstName, this.age);
  }
}
const user2 = {
  firstName: "Akash",
  age: "23",
}
//call method
user1.about.call(user1);

// anather uses
function about(hobby, favMusicin) {
  console.log(this.firstName, this.age, hobby, favMusicin);
}
const persone1 = {
  firstName: "Tanvir",
  age: 23
}
const persone2 = {
  firstName: "Tanvir",
  age: 23
}
about.call(persone1, "guter", "ai obelai ");
