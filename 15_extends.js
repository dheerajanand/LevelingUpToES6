class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  jump() {
    console.log("Jump");
  }
}

const newPerson = new person("dheeraj", 20);
newPerson;
newPerson.jump();

class dynamicPerson extends person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  quit() {
    console.log("i quit my job");
  }
}

const dynamicPerson2 = new dynamicPerson("sfsf", 23, "male");
dynamicPerson2;
dynamicPerson2.quit();
