class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}

class newPerson extends Person {
  constructor(name, age, years) {
    super(name, age);
    this.years = years;
  }
  getName() {
    return super.getName() + "!";
  }
}

const newPerson2 = new newPerson("Dheeraj", 10, 45);
newPerson2;

console.log(newPerson2.getName());
