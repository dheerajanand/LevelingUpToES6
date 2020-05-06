var person = {
  firstName: "Bob",
  age: 20,
  haveBirthday: function() {
    return this.age++;
  },
  lessBirthday() {
    return this.age--;
  }
};

person;
person.haveBirthday();
person;
person.lessBirthday();
person;
