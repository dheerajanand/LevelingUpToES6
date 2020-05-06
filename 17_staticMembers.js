class Person {
  // const Person = class{}
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static setName(person, name) {
    person.name = name;
  }
}

// const keys = Object.keys({ a: 1 });
// keys;

const person = new Person("Dheeraj", 20);
Person.setName(person, "hello");
person;
