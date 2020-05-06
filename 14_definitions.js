var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.jump = function() {
  console.log("jump");
};

const person = new Person("dheeraj", 20);
person;

person.jump();

// ES6 way
class personES6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  jump() {
    console.log("jump");
  }
}
const newPerson = new personES6("something", 22);
newPerson;
newPerson.jump();
