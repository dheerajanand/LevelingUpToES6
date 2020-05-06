let Person = class {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name + "!";
  }
  set name(name) {
    this._name = name;
  }
};

const person = new Person("Dheeraj", 20);
// Using getter
person;
// let personname = person.name;
// personname;

// Using setter
person.name = "Alex";
person;
